import { notFound } from 'next/navigation';

// dynamic metadata configuration
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  const { profileId } = await params;
  return {
    title: `Profile: ${profileId}`,
  };
};

export default async function Product({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  // from next 15, params and searchparams were made asynchronous
  const { profileId } = await params; // (await params).profileId

  if (parseInt(profileId) > 1000) {
    notFound();
    // redirect('/'); // redirect can be used in the server components
  }

  return <h1>Hello from profile{profileId} page</h1>;
}
