import type { Metadata } from 'next';
import { Montserrat, Changa_One } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '900'],
});

const changaOne = Changa_One({ 
  subsets: ['latin'],
  variable: '--font-changa',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
  description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
  openGraph: {
    title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
    description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
    description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${changaOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
