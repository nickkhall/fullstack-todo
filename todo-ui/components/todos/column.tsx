import { ReactNode, useState } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

// Components
import Todo from './todo';

import { styled } from '@mui/material/styles';
import columnStyles from '@/styles/Todo/column';
import columnHeaderStyles from '@/styles/Todo/columnHeader';
import sortArrowIconStyles from '@/styles/Todo/columnHeaderIcon';
import dividerStyles from '@/styles/Divider';

type ColumnProps = {
  columnName: string
  todos: {}[]
}

const StyledColumn = styled(Paper)<PaperProps>(columnStyles);
const StyledDivider = styled(Divider)<DividerProps>(dividerStyles);
const StyledDiv = styled('div')(columnHeaderStyles);
const StyledArrowDownIcon = styled(VerticalAlignBottomIcon)(sortArrowIconStyles);
const StyledArrowUpIcon = styled(VerticalAlignTopIcon)(sortArrowIconStyles);


export default function Column ({ columnName, todos }: ColumnProps) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortType, setSortType] = useState('created_at');

  return (
    <StyledColumn>
      <StyledDiv>
        <Typography variant="h6">{columnName}</Typography>
        <div>
          <StyledArrowDownIcon />
          <StyledArrowUpIcon />
        </div>
      </StyledDiv>
      <StyledDivider />
      <section>
        {todos?.map(todo => (
          <Todo key={todo.name} {...todo} />
        )) || null}
      </section>
    </StyledColumn>
  )
}
