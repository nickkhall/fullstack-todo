import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

// Styles
import { styled } from '@mui/material/styles';
import styles from 'styles/contentSection';

type ContentSectionProps = {
  children: ReactNode
}

const StyledContentSection = styled(Paper)<PaperProps>(styles);

export default function ContentSection ({ children }): ContentSectionProps {
  return (
    <StyledContentSection>
      {children}
    </StyledContentSection>
  )
}
