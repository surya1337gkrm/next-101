'use client';
import { useEffect, useState } from 'react';

export default function About() {
  // const [time, _] = useState(new Date().toUTCString());  // causes hydration mis-match
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);

    return () => {
      console.log('Cleanup | clearing the interval on unmount.');
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1 className='bg-gray-400 text-white'>Hello From About Page.</h1>
      <p>Time: {time ? time : 'Loading...'}</p>
    </>
  );
}
