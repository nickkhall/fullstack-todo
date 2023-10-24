import { ReactNode } from 'react'; 

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/verticallyAligned';

type ContentSectionProps = {
  children: ReactNode
}

export default function ContentSectionCentered ({ children }: ContentSectionProps) {
  const StyledSection = styled('div')(styles);

  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}
