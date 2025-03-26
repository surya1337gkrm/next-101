'use client';
import Card from '@/components/Card';
import { useRouter } from 'next/navigation';

export default function Notifications() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/dashboard/archived');
  };
  return (
    <Card>
      <div className='flex flex-col'>
        <h1>Notifications</h1>
        <button
          className='text-xs bg-green-600 text-white shadow-md p-2 cursor-pointer'
          onClick={handleClick}>
          See Archived
        </button>
      </div>
    </Card>
  );
}
