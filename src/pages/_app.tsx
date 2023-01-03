import { type AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';

import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Multitimer</title>
        <meta name="description" content="Manage your timers all at once!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
