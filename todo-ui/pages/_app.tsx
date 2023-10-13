import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

// Styles
import { theme } from 'public/theme'
import '../app/globals.css'

// Components
import Layout from '@/components/App/layout';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
};

export default App;
