import { styled } from '@mui/material/styles';

// Components
import AppBar, { AppBarProps } from '@mui/material/AppBar'; 
import SidebarHeader from 'components/Sidebar/header';
import SidebarMenu from 'components/Menu';

// Styles
import styles from 'styles/Sidebar';
import sidebarAppbarStyles from 'styles/Sidebar/appbar';

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
