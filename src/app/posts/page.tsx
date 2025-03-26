'use client';

import { useState, useEffect } from 'react';
import { IPost } from './api/data';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Posts() {  
//   const router = useRouter();

  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const data = await fetch('/posts/api');
    const res = await data.json();
    setPosts(res);
  };

  const deletePost = async (id: number) => {
    const res = await fetch(`/posts/api/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    const filteredPosts = posts?.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

//   const handleView = () => {
//     router.push('/posts/1');
//   };
  return (
    <>
      <h1 className='text-3xl font-bold'>Posts</h1>
      {posts?.length > 0 ? (
        posts?.map((post) => (
          <div
            key={post.id}
            className='bg-gray-700 p-4 m-2 text-white hover:scale-105'>
            <div className='flex justify-around items-center gap-6'>
              <h1>{post.content}</h1>
              <div className='flex gap-2'>
                <Link
                  className='bg-blue-500 p-2 text-white cursor-pointer'
                  href={`/posts/${post.id}`}>
                  view
                </Link>
                <button
                  className='bg-red-600 p-2 text-white cursor-pointer'
                  onClick={() => handleDelete(post.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No posts available.</h1>
      )}
    </>
  );
}
