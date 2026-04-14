import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mechachaotic.com'),
  title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
  description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
  openGraph: {
    title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
    description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
    images: ['/images/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to a universe riddled with madness and wreathed in mystery.',
    description: 'Join Ethan every week to create a Metabeing from scratch, through an interactive livestream.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa+One&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
