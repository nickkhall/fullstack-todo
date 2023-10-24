import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/sectionRow';

type ContentSectionProps = {
  children: JSX.Element[] | JSX.Element | null
}

export default function ContentSectionRow ({ children }: ContentSectionProps) {
  const StyledContentSectionRow = styled(Paper)<PaperProps>(styles);

  return (
    <StyledContentSectionRow>
      {children}
    </StyledContentSectionRow>
  )
}
