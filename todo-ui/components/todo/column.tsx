import { ReactNode } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

// Components
import Todo from '@/components/todo';

import { styled } from '@mui/material/styles';
import styles from '@/styles/Todo/column';

type ColumnProps = {
  columnName: string
}

const mockTodos = [
  {
    name: 'clean blood off shoes'
  },
  {
    name: 'clean baseball bat'
  },
  {
    name: 'eat lunch'
  },
  {
    name: 'clean blood out of trash can'
  }
]

export default function Column ({ columnName }: ColumnProps) {
  const StyledColumn = styled(Paper)<PaperProps>(styles);

  return (
    <StyledColumn>
      <Typography variant="h6">{columnName}</Typography>
      {mockTodos.map(todo => (
        <Todo key={todo.name} {...todo} />
      ))}
    </StyledColumn>
  )
}
