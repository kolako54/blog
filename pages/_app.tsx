/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import '@/styles/globals.css';

import { type AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
