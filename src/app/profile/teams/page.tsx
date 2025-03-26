import { Metadata } from 'next';
import { Counter } from './Counter';
export const metadata: Metadata = {
  title: 'Counter',
};
export default function Teams() {
  return (
    <>
      <h1>From teams</h1>
      <br />
      <Counter />
    </>
  );
}
