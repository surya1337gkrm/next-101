type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved.');
    }, 1000);
  });
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: User = await res.json();
  return (
    <div className='flex flex-col'>
      <h1 className='text-md font-bold'>{user.name}</h1>
      <p className='text-gray-600'>
        {user.username} | {user.email}
      </p>
    </div>
  );
}
