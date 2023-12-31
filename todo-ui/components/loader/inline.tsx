// MUI
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

// Styles
import loaderStyles from '@/styles/loader';

const StyledLoader = styled(CircularProgress)(loaderStyles);

export default function Loader() {
  return (
    <StyledLoader />
  ) 
}
