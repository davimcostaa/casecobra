import { db } from '@/db';
import { notFound, useSearchParams } from 'next/navigation';
import ThankYou from './ThankYou';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return (
    <div>
      <ThankYou configuration={configuration} />
    </div>
  );
};

export default Page;
