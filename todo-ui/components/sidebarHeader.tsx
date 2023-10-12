// Styling
import { styled } from '@mui/material/styles';
import styles from 'styles/sidebar'

// Components
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const SidebarToolbar = styled(Toolbar)<ToolbarProps>(styles)

function SidebarHeader() {
  return (
    <SidebarToolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
    </SidebarToolbar>
  )
}

export default SidebarHeader;
