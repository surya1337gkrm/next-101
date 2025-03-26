'use client';
import Card from '@/components/Card';
import { useRouter } from 'next/navigation';

export default function ArchivedNotifications() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/dashboard');
  };
  return (
    <Card>
      <div className='flex flex-col'>
        <h1>Archived Notifications</h1>
        <button
          className='text-xs bg-green-600 text-white shadow-md p-2 cursor-pointer w-min text-right'
          onClick={handleClick}>
          Back
        </button>
      </div>
    </Card>
  );
}
