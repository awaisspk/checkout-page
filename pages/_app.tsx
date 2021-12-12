import {globalStyles} from '@globalCss';
import {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {ReactElement} from 'react';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => JSX.Element;
};

type NextAppWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: NextAppWithLayout) {
  globalStyles();
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
