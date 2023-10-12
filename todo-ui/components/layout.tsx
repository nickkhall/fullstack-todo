import type { FunctionComponent, ReactNode } from 'react';

// Components
import Main from 'components/main';
import Sidebar from 'components/sidebar';
import MainContent from 'components/mainContent'

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Main>
    <Sidebar />
    <MainContent>
      {children}
    </MainContent>
  </Main>
);

export default Layout;
