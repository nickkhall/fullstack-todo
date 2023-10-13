import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/section';

type ContentSectionProps = {
  children: ReactNode
}

export default function ContentSection ({ children }): ContentSectionProps {
  const StyledContentSection = styled(Paper)<PaperProps>(styles);

  return (
    <StyledContentSection>
      {children}
    </StyledContentSection>
  )
}
