// MUI Components
import Divider, { DividerProps } from '@mui/material/Divider';

// Styles
import { styled } from '@mui/material/styles';
import dividerStyles from '@/styles/Divider';

const StyledDivider = styled(Divider)<DividerProps>(dividerStyles);

export default function styledDivider() {
  return (
    <StyledDivider />
  );
}
