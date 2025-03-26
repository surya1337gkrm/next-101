'use client';
import { useRouter } from 'next/navigation';

export const Button = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about');
    alert('visting ABOUT page.');
  };
  return (
    <button
      className='bg-green-700 text-white shadow-md p-2 m-2 cursor-pointer'
      onClick={handleClick}>
      Order
    </button>
  );
};
