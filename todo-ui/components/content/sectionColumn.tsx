import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Content/sectionColumn';

type ContentSectionProps = {
  children: JSX.Element[] | JSX.Element
}

export default function ContentSectionColumn ({ children }: ContentSectionProps) {
  const StyledContentSectionColumn = styled(Paper)<PaperProps>(styles);

  return (
    <StyledContentSectionColumn>
      {children}
    </StyledContentSectionColumn>
  )
}
