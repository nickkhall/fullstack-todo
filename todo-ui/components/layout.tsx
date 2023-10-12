import type { FunctionComponent, ReactNode } from 'react';

// Components
import Main from 'components/main';
import Sidebar from 'components/sidebar';

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Main>
    <Sidebar />
    {children}
  </Main>
);

export default Layout;
