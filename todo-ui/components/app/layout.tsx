import type { FunctionComponent, ReactNode } from 'react';
import { useRouter } from 'next/router';

// Components
import Main from '@/components/app';
import Sidebar from '@/components/sidebar';
import MainContent from '@/components/content'
import ContentSectionCentered from '@/components/content/centered';

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter();
  if (router.pathname === "/login") {
    return (
      <ContentSectionCentered>
        {children}
      </ContentSectionCentered>
    )
  }

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
