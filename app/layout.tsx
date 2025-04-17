import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TemplateBase from '@/containers/templates/base';
import { cn } from '@/utils/cn';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'bankdash',
  description: 'developed by jouissance-seeker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={cn('bg-gray-100', inter.variable)}>
        <TemplateBase>{children}</TemplateBase>
      </body>
    </html>
  );
}
