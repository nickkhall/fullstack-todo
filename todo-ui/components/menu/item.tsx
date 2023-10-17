// Components
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Menu/items';

type SidebarMenuItemProps = {
  name: string
  link: string
  icon: React.ElementType
  pathname: string
  onClick: () => void
}


export default function SidebarMenuItem({
  name,
  link,
  icon: Icon,
  pathname,
  onClick
}: SidebarMenuItemProps) {
  const isActivePath = link && pathname === link;
  const StyledSidebarMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => { return styles({theme, isActivePath})})

  return (
    <StyledSidebarMenuItem onClick={onClick}>
      <ListItemIcon>
        <Icon sx={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </StyledSidebarMenuItem>
  )
}
