import { styled } from '@mui/material/styles';

// Components
import Paper from '@mui/material/Paper';
import MenuList, { MenuListProps } from '@mui/material/MenuList';
import SidebarMenuItem from 'components/sidebarMenuItem';

// Styles
import styles from 'styles/sidebarMenu';

// Constants
import sidebarMenuItems from 'constants/sidebarMenuItems';

type SidebarMenuProps = {}

const StyledSidebarMenu = styled(MenuList)<MenuListProps>(styles);

export default function SidebarMenu<SidebarMenuProps> () {
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <StyledSidebarMenu>
        {sidebarMenuItems.map(({ name, icon }) => (
          <SidebarMenuItem key={name} name={name} icon={icon} />
        ))}
      </StyledSidebarMenu>
    </Paper>
  )
}

