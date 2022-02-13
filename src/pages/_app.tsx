import Head from 'next/head';
import './Global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
