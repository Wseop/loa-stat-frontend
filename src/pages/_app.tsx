import Layout from '@/components/commons/layout';
import { globalStyles } from '@/styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
