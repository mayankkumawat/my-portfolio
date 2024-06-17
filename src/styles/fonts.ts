import { Cabin } from 'next/font/google';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
