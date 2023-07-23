import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

// Realizamos una extension del tipo Next.js para poder agregar una 
// propiedad llamado getLayout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};


// Extendemos de AppProps, AppPropsWithLayout para poder utilizar 
// el type creado anteriormente. 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <DarkLayoutPage {...pageProps} />;

  return getLayout(<Component {...pageProps} />);
}
