// define the prisma/db operations here

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// seed the db with some data
const seedData = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: 'FizzBuzz', price: 100, description: 'Fizz Buzz Program' },
        {
          title: 'Designing data intensive apps',
          price: 200,
          description: 'System design interview',
        },
        {
          title: 'Live coding',
          price: 300,
          description: '75|75|65 mins interviews.',
        },
      ],
    });
  }
};

seedData();

export async function getProducts() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const products = await prisma.product.findMany();
  return products;
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  return await prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function addProduct(
  title: string,
  price: number,
  description: string | null
) {
  console.log(price);
  return await prisma.product.create({
    data: { title, price, description },
  });
}
