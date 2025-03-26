export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-12 border-2 border-red-400 shadow-md flex justify-center items-center'>
      {children}
    </div>
  );
}
