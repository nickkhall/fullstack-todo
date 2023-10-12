// Components
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';

// Styles
import { styled } from '@mui/material/styles';
import styles from 'styles/sidebarMenuItems';

type SidebarMenuItemProps = {
  name: string
}

const StyledSidebarMenuItem = styled(MenuItem)(styles)

function SidebarMenuItem({ name }: SidebarMenuItemProps) {
  return (
    <MenuItem>
      <ListItemIcon>
        <ContentCut fontSize="small" />
      </ListItemIcon>
      <ListItemText>Cut</ListItemText>
      <Typography variant="body2" color="text.secondary">
        {name}
      </Typography>
    </MenuItem>
  )
}

export default SidebarMenuItem;
