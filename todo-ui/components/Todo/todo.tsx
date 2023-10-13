import { ReactNode, PropsWithChildren } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'

import { styled } from '@mui/material/styles';
import styles from 'styles/Todo';

type TodoProps = {
  name: string
}

const StyledTodo = styled(Paper)<PaperProps>(styles);

export default function Todo ({ name }: TodoProps) {
  return (
    <StyledTodo>
      {name}
    </StyledTodo>
  )
}
