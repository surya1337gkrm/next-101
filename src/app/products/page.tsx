import { getProducts, deleteProduct } from '@/prisma-db';
import { revalidatePath } from 'next/cache';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const deleteItem = async (productId: number) => {
  'use server';
  await deleteProduct(productId);
  //   console.log('Product deleted successfully');
  //   window.location.reload();
  revalidatePath('/products');
};

export default async function ProductsPage() {
  const products: Product[] = await getProducts();
  //   console.log(products);

  return (
    <>
      <h1 className='text-3xl text-foreground font-bold'>Products</h1>
      <div className='flex flex-wrap m-5'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-foreground p-6 m-2 rounded shadow-lg space-y-2 flex-1 min-w-max'>
            <h1 className='text-black font-bold'>{product.title}</h1>
            <p className='text-black'>$ {product.price}</p>
            <p className='text-xs text-gray-400'>
              {product.description ?? 'No description available'}
            </p>
            <form action={deleteItem.bind(null, product.id)}>
              <button
                type='submit'
                className='float-right bg-red-600 text-foreground p-2 mt-2 cursor-pointer rounded shadow-lg text-xs'>
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
