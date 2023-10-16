import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

// Context Provider
import AuthProvider from 'context/auth';

// Styles
import { theme } from 'public/theme'
import '../app/globals.css'

// Components
import RouteGuard from '@/components/routeGuard';
import Layout from '@/components/app/layout';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider> 
      <ThemeProvider theme={theme}>
        <RouteGuard>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RouteGuard>
      </ThemeProvider>
    </AuthProvider>
  )
};

export default App;
