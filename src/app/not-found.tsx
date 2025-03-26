import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Page not found.',
};
export default function NotFound() {
  return <h1 className='bg-red-600 text-white m-4 p-4'>Page not found.</h1>;
}
