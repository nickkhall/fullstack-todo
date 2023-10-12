import { styled } from '@mui/material/styles';

// Components
import AppBar from '@mui/material/AppBar'; 
import SidebarHeader from './sidebarHeader';
import SidebarMenu from './sidebarMenu';

// Styles
import styles from 'styles/sidebar'

type SidebarProps = {}

const StyledSidebar = styled('div')(styles)

export default function Sidebar<SidebarProps> () {
  return (
    <StyledSidebar>
      <AppBar position="static" color="secondary" enableColorOnDark>
        <SidebarHeader />
        <SidebarMenu />
      </AppBar>
    </StyledSidebar>
  )
}
