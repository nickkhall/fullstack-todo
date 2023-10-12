// Components
import AppBar from '@mui/material/AppBar'; 
import SidebarHeader from './sidebarHeader';

type SidebarProps = {

}

function Sidebar<SidebarProps> () {
  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <SidebarHeader />
    </AppBar>
  )
}

export default Sidebar;
