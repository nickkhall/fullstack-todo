import type { FunctionComponent, ReactNode } from 'react';
import { useRouter } from 'next/router';

// Components
import Main from 'components/main';
import Sidebar from 'components/sidebar';
import MainContent from 'components/mainContent'

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <Main>
      <Sidebar {...router} />
      <MainContent {...router}>
        {children}
      </MainContent>
    </Main>
  )
};

export default Layout;
