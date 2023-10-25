import { styled } from '@mui/material/styles';

// Components
import AppBar, { AppBarProps } from '@mui/material/AppBar'; 
import SidebarHeader from '@/components/sidebar/header';
import SidebarMenu from '@/components/menu';

// Styles
import styles from '@/styles/sidebar';
import sidebarAppbarStyles from '@/styles/sidebar/appbar';

// Constants
import sidebarMenuItems from '@/constants/Sidebar/menuItems';
import userMenuItems from '@/constants/User/menuItems';

type SidebarProps = {}

export default function Sidebar ({ ...props }: SidebarProps) {
  const StyledSidebar = styled('div')(styles)
  const StyledAppbar = styled(AppBar)<AppBarProps>(sidebarAppbarStyles)

  return (
    <StyledSidebar>
      <StyledAppbar position="static" enableColorOnDark>
        <div>
          <SidebarHeader />
          <SidebarMenu
            items={sidebarMenuItems}
            {...props}
          />
        </div>
        <SidebarMenu
          items={userMenuItems}
          {...props}
        />
      </StyledAppbar>
    </StyledSidebar>
  )
}
