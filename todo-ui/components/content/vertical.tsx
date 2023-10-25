import { ReactNode } from 'react'; 

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/content/vertical';

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
