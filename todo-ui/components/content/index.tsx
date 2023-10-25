import type { FunctionComponent, ReactNode } from 'react';

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/content';

type MainContentProps = {
}

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  const StyledMainContent = styled('div')<MainContentProps>(styles)

  return (
    <StyledMainContent {...props}>
      {children}
    </StyledMainContent>
  )
};

export default Layout;
