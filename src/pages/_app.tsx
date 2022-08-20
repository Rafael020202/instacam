import type { AppProps } from 'next/app'
import Head from 'next/head';

import { AuthProvider } from '../context/AuthContext';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <AuthProvider>
      <Head>
        <title>Hot & Charm</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </AuthProvider>
  )

}

export default MyApp
