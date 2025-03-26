import { NextRequest } from 'next/server';
import { posts, IPost } from './data';

// export function GET() {
//   return Response.json(posts);
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search');
  if (search) {
    return Response.json(posts.filter((post) => post.content.includes(search)));
  } else {
    return Response.json(posts);
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { content } = body;

  const post: IPost = {
    id: posts.length + 1,
    content,
    user: 1,
  };

  posts.push(post);

  return new Response(
    JSON.stringify({ message: 'Post created.', posts: posts }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    }
  );
}
