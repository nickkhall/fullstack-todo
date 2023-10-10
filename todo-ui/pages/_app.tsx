import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

// Components
import Layout from '@/components/layout';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default App;
