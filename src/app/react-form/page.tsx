import SubmitButton from '@/components/SubmitButton';
import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';

export default function AddProduct() {
  // can use seperate state variables for each field
  // store the data onchange event and then use this state data and send it to the post req endpoint
  // /react-form/api
  // or use server actions

  const createProduct = async (formData: FormData) => {
    'use server';
    console.log(formData);
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    

    await addProduct(title, parseFloat(price), description);
    redirect('/products');
  };

  return (
    <div className='bg-foreground p-8 m-2 rounded shadow-lg'>
      <h1 className='text-2xl text-background font-bold mb-4'>Add Product</h1>
      <form className='flex flex-col text-black gap-4' action={createProduct}>
        <label htmlFor='title'>
          <h1 className='font-bold'>Title</h1>
          <input
            type='text'
            id='title'
            name='title'
            required
            className='border-black border-2 rounded w-full'
          />
        </label>

        <label htmlFor='price'>
          <h1 className='font-bold'>Price</h1>
          <input
            type='number'
            id='price'
            name='price'
            step={0.01}
            required
            className='border-black border-2 rounded'
          />
        </label>

        <label htmlFor='title'>
          <h1 className='font-bold'>Description</h1>
          <textarea
            id='description'
            name='description'
            className='border-black border-2 rounded w-full'
            rows={5}
          />
        </label>
        <SubmitButton btnText='Add Product' />
      </form>
    </div>
  );
}
