import type { FunctionComponent, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <main>
    {children}
  </main>
);

export default Layout;
