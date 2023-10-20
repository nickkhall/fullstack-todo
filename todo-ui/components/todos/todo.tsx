import { ReactNode, PropsWithChildren } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

import { styled } from '@mui/material/styles';
import styles from '@/styles/Todo';

type TodoProps = {
  name: string
  key: string
}

export default function Todo ({ name }: TodoProps) {
  const StyledTodo = styled(Paper)<PaperProps>(styles);

  return (
    <StyledTodo>
      {name}
    </StyledTodo>
  )
}
