import { Suspense } from 'react';
import Author from './Author';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Todos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data: Todo[] = await res.json();

  return (
    <>
      <h1 className='text-3xl font-bold'>Todos</h1>
      <div className='flex flex-col justify-start'>
        {data.map((todo) => {
          return (
            // if the todo.complted is true then strikethrough the h1 element
            <div
              className='flex flex-col gap-4 bg-blue-300 p-4 mb-2 shadow-md rounded cursor-pointer'
              key={todo.id}>
              {/* <input type='checkbox' checked={todo.completed} /> */}
              <h1
                className={`"text-white text-xl font-bold  p-2" ${
                  todo.completed ? 'line-through' : ''
                }`}>
                {todo.title}
              </h1>
              {/* SEQUENTIAL DATA FETCHING | If we dont wrap the Author component with Suspense, for each todo we need to wait till the 
              // Author component is fully loaded before rendering the next todo */}
              <Suspense
                fallback={
                  <p className='text-gray-400 text-sm'>
                    Loading Author Details
                  </p>
                }>
                <Author userId={todo.userId} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
}
