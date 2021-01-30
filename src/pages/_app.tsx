import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>
          React Norte - A melhor comunidade de React no Norte!
        </title>
      </Head>

      <GlobalStyles />
    </>
  );
}
