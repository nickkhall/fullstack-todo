// MUI Components
import Divider, { DividerProps } from '@mui/material/Divider';

// Styles
import { styled } from '@mui/material/styles';
import dividerStyles from '@/styles/Divider';

type StyledDividerProps = {
  noMargin?: boolean
}

export default function styledDivider({ noMargin }) {
  const StyledDivider = styled(Divider)<DividerProps>(({ theme }) => { return dividerStyles({theme, noMargin})});

  return (
    <StyledDivider />
  );
}
