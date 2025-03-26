'use client';
import { useState } from 'react';

// metadata isnt available in the client components
export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Count:{count}</h1>
      <button
        onClick={handleClick}
        className='bg-gray-500 p-1 shadow-md text-white cursor-pointer'>
        Increment by 1
      </button>
    </>
  );
};
