'use client';

import PhonePreview from '@/components/PhonePreview';
import { Configuration } from '@prisma/client';

const ThankYou = ({ configuration }: { configuration: Configuration }) => {
  console.log(configuration);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <p className='text-base font-medium text-primary'>Thank you!</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
            Your case is on the way!
          </h1>
          <p className='mt-2 text-base text-zinc-500'>
            We&apos;ve receveid your order and are now processing it.
          </p>

          <div className='mt-12 text-sm font-medium'>
            <p className='text-zinc-900'>Order number</p>
            <p className='mt-2 text-zinc-500'>45454303GGB9B5324R</p>
          </div>
        </div>

        <div className='mt-10 border-t border-zinc-200'>
          <div className='mt-10 flex flex-auto flex-col'>
            <h4 className='font-semibold text-zinc-900'>
              You made a great choice!
            </h4>
            <p className='mt-2 text-sm text-zinc-600'>
              We at CaseCobra believe that a phone case doesn&apos;t only need
              to look good, but also last you the years to come. We offer a
              5-year print guarantee: If you case isn&apos;t of the highest
              quality. We&apos;ll replace it for free.
            </p>
          </div>
        </div>

        <div className='flex space-x-6 overflow-hidden mt-4 rounded-2xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl'>
          <PhonePreview
            color={configuration?.color}
            croppedimageUrl={configuration?.croppedimageUrl!}
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
