// MUI Icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// Utils
import { removeJWTFromStorage } from '@/utils/storage';

export default [{
  name: 'Settings',
  icon: SettingsIcon 
}, {
  name: 'Logout',
  icon: LogoutIcon,
  onClick: () => {
    removeJWTFromStorage();
    window.location.reload();
  }
}]
