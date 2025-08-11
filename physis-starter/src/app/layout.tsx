import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/navbar';
import Container from '@/components/ui/container';
import { APP_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Presocratic wisdom meets daily training.'
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <Navbar />
        <Container className="py-6">{children}</Container>
      </body>
    </html>
  );
}
