'use client';
import Card from '@/components/Card';

// error.tsx will be helpful only for handling runtime errors
// pre-rendering phase during build might still throw errors and halt the build process
// to avoid that, either throw errors conditionally in development env [ process.env.NODE_ENV === 'development' ]
// or wrap the error handling code with try-catch
export default function ErrorBoundary({ error }: { error: Error }) {
  console.log(error.message);
  return (
    <Card>
      <span className='bg-red-600 text-white p-2'>{error.message}</span>
    </Card>
  );
}
