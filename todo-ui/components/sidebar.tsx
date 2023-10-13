import { styled } from '@mui/material/styles';

// Components
import AppBar, { AppBarProps } from '@mui/material/AppBar'; 
import SidebarHeader from './sidebarHeader';
import SidebarMenu from './sidebarMenu';

// Styles
import styles from 'styles/sidebar';
import sidebarAppbarStyles from 'styles/sidebarAppbar';

// Constants
import sidebarMenuItems from 'constants/sidebarMenuItems';
import userMenuItems from 'constants/userMenuItems';

type SidebarProps = {}

const StyledSidebar = styled('div')(styles)
const StyledAppbar = styled(AppBar)<AppBarProps>(sidebarAppbarStyles)

export default function Sidebar ({ ...props }: SidebarProps) {
  return (
    <StyledSidebar>
      <StyledAppbar position="static" enableColorOnDark>
        <div>
          <SidebarHeader />
          <SidebarMenu {...props} items={sidebarMenuItems} />
        </div>
        <SidebarMenu {...props} items={userMenuItems} />
      </StyledAppbar>
    </StyledSidebar>
  )
}
