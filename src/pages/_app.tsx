import GlobalStyle from '../styles/global';
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Head>
        <title>Hot & Charm</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
