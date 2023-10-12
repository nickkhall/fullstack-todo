import type { FunctionComponent, ReactNode } from 'react';

// Styles
import { styled } from '@mui/material/styles';
import styles from 'styles/mainContent';

type MainContentProps = {
}

const StyledMainContent = styled('div')<MainContentProps>(styles)

type LayoutProps = {
  children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <StyledMainContent>
    {children}
  </StyledMainContent>
);

export default Layout;
