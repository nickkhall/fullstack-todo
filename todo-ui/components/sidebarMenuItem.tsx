// Components
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// Styles
import { styled } from '@mui/material/styles';
import styles from 'styles/sidebarMenuItems';

type SidebarMenuItemProps = {
  name: string
  icon: React.ElementType
}

const StyledSidebarMenuItem = styled(MenuItem)<MenuItemProps>(styles)

export default function SidebarMenuItem({ name, icon: Icon }: SidebarMenuItemProps) {
  return (
    <StyledSidebarMenuItem>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </StyledSidebarMenuItem>
  )
}
