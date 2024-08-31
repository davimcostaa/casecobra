import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { constructMetaData } from '@/lib/utils';
import Providers from '@/components/Prodivers';
import Navbar from '@/components/Navbar';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={recursive.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />

        <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full'>
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
