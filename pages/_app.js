import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';


export default function App({ Component, pageProps:{ session, ...pageProps } }) {
  return ( 
    <>
    {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gitlab.png" />
      </Head> */}
  
<SessionProvider session={session}>
    <ParallaxProvider scrollAxis='vertical'>
    <Component {...pageProps} />
    </ParallaxProvider> 
    </SessionProvider>
    </>
    
    )
}
