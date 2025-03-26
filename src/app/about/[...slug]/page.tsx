export default async function CatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const routePath = (await params).slug.join('/');
  return <h1>Catch all segment with path variables: {routePath}</h1>;
}
