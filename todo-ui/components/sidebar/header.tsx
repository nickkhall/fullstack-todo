// Styling
import { styled } from '@mui/material/styles';
import styles from '@/styles/Sidebar/toolbar'

// Components
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function SidebarHeader() {
  const StyledSidebarHeader = styled(Toolbar)<ToolbarProps>(styles)

  return (
    <StyledSidebarHeader>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <CloudQueueIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Todo App
      </Typography>
    </StyledSidebarHeader>
  )
}

export default SidebarHeader;
