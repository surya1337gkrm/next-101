export default async function PostView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return <h1>Post view</h1>;
}
