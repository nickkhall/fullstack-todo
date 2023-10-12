import { styled } from '@mui/material/styles';

// Components
import AppBar, { AppBarProps } from '@mui/material/AppBar'; 
import SidebarHeader from './sidebarHeader';
import SidebarMenu from './sidebarMenu';

// Styles
import styles from 'styles/sidebar';
import appbarStyles from 'styles/sidebarAppbar';

type SidebarProps = {}

const StyledSidebar = styled('div')(styles)
const StyledAppbar = styled(AppBar)<AppbarProps>(appbarStyles)

export default function Sidebar<SidebarProps> () {
  return (
    <StyledSidebar>
      <StyledAppbar position="static" enableColorOnDark>
        <SidebarHeader />
        <SidebarMenu />
      </StyledAppbar>
    </StyledSidebar>
  )
}
