import { addProduct } from '@/prisma-db';

export async function POST(request: Request) {
  const body = await request.json();
  const data = await addProduct(body.title, body.price, body.description);
  return new Response(JSON.stringify({ data }), {
    headers: {
      'Content-Type': 'application/json',
      status: '201',
    },
  });
}
