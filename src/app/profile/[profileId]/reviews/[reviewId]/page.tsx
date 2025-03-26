export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ profileId: string; reviewId: string }>;
  searchParams: Promise<{ lang: 'en' | 'fr' | 'tl' }>;
}) {
  const { profileId, reviewId } = await params;
  const { lang = 'en' } = await searchParams;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('RESOLVED!');
    }, 3000);
  });

  return (
    <h1>
      Hello from profile {profileId} page and review with review ID: {reviewId}
      and reading in{' '}
      <span className='bg-red-500 p-1 rounded-full text-white'>{lang}</span>
    </h1>
  );
}
