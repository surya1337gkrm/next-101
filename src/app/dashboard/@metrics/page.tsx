import Card from '@/components/Card';

export default function Metrics() {
  const random = Math.random();
  try {
    if (random > 0.5) {
      throw new Error('Generated error');
    }
  } catch (error) {
    console.error(error);
  }
  return <Card>Metrics</Card>;
}
