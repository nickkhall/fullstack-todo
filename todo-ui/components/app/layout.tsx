import type { FunctionComponent, ReactNode } from 'react';
import { useRouter } from 'next/router';

// Components
import Main from '@/components/app';
import Sidebar from '@/components/sidebar';
import MainContent from '@/components/content'

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
