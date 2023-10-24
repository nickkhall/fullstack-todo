import { ReactNode } from 'react'; 

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/spaced';

type ContentSectionSpacedProps = {
  children: ReactNode
}

export default function ContentSectionSpaced ({ children }: ContentSectionSpacedProps) {
  const StyledContentSectionSpaced = styled('div')(styles);

  return (
    <StyledContentSectionSpaced>
      {children}
    </StyledContentSectionSpaced>
  )
}
