import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/section';

type ContentSectionProps = {
  children: JSX.Element[]
}

export default function ContentSectionRow ({ children }: ContentSectionProps) {
  const StyledContentSectionRow = styled(Paper)<PaperProps>(styles);

  return (
    <StyledContentSectionRow>
      {children}
    </StyledContentSectionRow>
  )
}
