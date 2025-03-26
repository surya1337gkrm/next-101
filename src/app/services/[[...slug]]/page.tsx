import { Button } from './Button';

export default async function OptionalCatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const routePath = (await params).slug;
  console.log(routePath);

  return (
    <>
      <h1>optional Catch all segment with path variables: {routePath}</h1>
      <Button />
    </>
  );
}
