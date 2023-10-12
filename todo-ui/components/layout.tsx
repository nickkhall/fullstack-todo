import type { FunctionComponent, ReactNode } from 'react';

// Components
import Sidebar from 'components/sidebar'

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <main>
    <Sidebar />
    {children}
  </main>
);

export default Layout;
