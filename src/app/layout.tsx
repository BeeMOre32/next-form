import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/provider';
import localFont from 'next/font/local';

const pretendardFont = localFont({
  src: 'Pretendard-Regular.woff',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={pretendardFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
