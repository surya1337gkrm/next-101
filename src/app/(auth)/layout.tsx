export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='bg-blue-500 text-white p-2 mb-4'>
        Welcome to my-app
      </header>
      {children}
      <footer className='bg-gray-500 text-white p-2 mt-4'>Footer</footer>
    </>
  );
}
