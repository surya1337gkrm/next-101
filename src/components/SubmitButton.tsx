'use client';

import { useFormStatus } from 'react-dom';
import Loader from './spinner';

export default function SubmitButton({ btnText }: { btnText: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className={`font-bold text-foreground w-fit p-2 rounded ${
        pending
          ? 'cursor-not-allowed bg-gray-500'
          : 'cursor-pointer bg-blue-500'
      }`}
      disabled={pending}>
      <div className='flex gap-2 items-center'>
        {btnText} {pending && <Loader />}
      </div>
    </button>
  );
}
