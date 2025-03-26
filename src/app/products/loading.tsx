export default function Loading() {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className='text-3xl text-foreground font-bold'>Products</h1>
      <div className='flex flex-wrap m-5'>
        {new Array(20).fill(0).map((_, index) => (
          <div
            key={index}
            className='bg-foreground p-8 m-2 rounded shadow-lg space-y-2 flex-1 min-w-max'>
            <h1 className=' w-[300px] h-2 animate-pulse bg-gray-200'></h1>
            <p className='w-[200px] h-1 animate-pulse bg-gray-200'></p>
            <p className='w-[100px] h-1 animate-pulse bg-gray-200'></p>
          </div>
        ))}
      </div>
    </div>
  );
}
