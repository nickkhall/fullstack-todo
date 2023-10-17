import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

// Context Provider
import AuthProvider from 'context/auth';

// Styles
import { theme } from 'public/theme'
import '../app/globals.css'

// Components
import Layout from '@/components/app/layout';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider> 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  )
};

export default App;
