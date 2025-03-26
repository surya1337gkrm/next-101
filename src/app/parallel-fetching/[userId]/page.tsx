type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

const fetchPosts = async (userId: string): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
};

const fetchAlbums = async (userId: string): Promise<Album[]> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
};

export default async function ParallelFetching({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;

  // we need both posts and albums of a user
  // instead of awaiting for both requests to complete and returj the response
  // we can do : PARALLEL PROCESSING

  const postsData = await fetchPosts(userId);
  const albumsData = await fetchAlbums(userId);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <>
      <div className='flex gap-2 justify-center m-4'>
        {/* Posts section */}
        <div className='max-w-1/2'>
          <h1 className='ml-2 text-3xl font-bold'>Posts</h1>
          {posts.length === 0 ? (
            <div className='flex flex-col bg-white m-2 p-4 rounded-lg shadow-lg'>
              <h1 className='text-xl font-bold '>No posts found.</h1>
            </div>
          ) : (
            posts.map((post) => (
              <div
                className='flex flex-col bg-white m-2 p-4 rounded-lg shadow-lg'
                key={post.id}>
                <h1 className='text-xl font-bold text-background'>{post.title}</h1>
                <p className='text-gray-600 text-sm'>{post.body}</p>
              </div>
            ))
          )}
        </div>

        <div className='max-w-1/2'>
          <h1 className='ml-2 text-3xl font-bold'>Albums</h1>
          {albums.length === 0 ? (
            <div className='flex flex-col bg-white m-2 p-4 rounded-lg shadow-lg'>
              <h1 className='text-xl font-bold '>No albums found.</h1>
            </div>
          ) : (
            albums.map((album) => (
              <div
                className='flex flex-col bg-white m-2 p-4 rounded-lg shadow-lg'
                key={album.id}>
                <h1 className='text-xl font-bold text-background'>{album.title}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
