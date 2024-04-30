import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import styles from '@/app/page.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${styles.body}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
