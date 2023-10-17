// MUI Icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// Utils
import { removeUserFromStorage } from '@/utils/storage';

export default [{
  name: 'Settings',
  icon: SettingsIcon 
}, {
  name: 'Logout',
  icon: LogoutIcon,
  onClick: () => {
    removeUserFromStorage();
    window.location.reload();
  }
}]
