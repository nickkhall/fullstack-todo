import { styled } from '@mui/material/styles';

// Components
import AppBar, { AppBarProps } from '@mui/material/AppBar'; 
import SidebarHeader from '@/components/sidebar/header';
import SidebarMenu from '@/components/menu';

// Styles
import styles from '@/styles/Sidebar';
import sidebarAppbarStyles from '@/styles/Sidebar/appbar';

// Constants
import sidebarMenuItems from '@/constants/sidebarMenuItems';
import userMenuItems from '@/constants/userMenuItems';

type SidebarProps = {}

export default function Sidebar ({ ...props }: SidebarProps) {
  const StyledSidebar = styled('div')(styles)
  const StyledAppbar = styled(AppBar)<AppBarProps>(sidebarAppbarStyles)

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
