import { posts } from '../data';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return new Response(JSON.stringify({ error: 'Post ID is not a number' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  } else {
    return Response.json(posts.filter((post) => post.id === parsedId));
  }
  //   try {
  //     const parsedId = parseInt(id);
  //     console.log(parsedId);
  //     return Response.json(posts.filter((post) => post.id === parsedId));
  //   } catch (err) {
  //     return new Response(
  //       JSON.stringify({
  //         error: err,
  //       }),
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //         status: 500,
  //       }
  //     );
  //   }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { content } = body;

  const postIndex = posts.findIndex((post) => post.id === parseInt(id));
  posts[postIndex].content = content;

  return new Response(JSON.stringify({ message: 'Post modified.' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  posts.splice(postIndex, 1);

  return new Response(JSON.stringify({ message: 'Post deleted.' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
