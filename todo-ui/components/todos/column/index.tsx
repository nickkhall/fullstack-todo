import { ReactNode, useState, useEffect, useCallback } from 'react'; 

// MUI Components
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';

// Components
import Todo from '../todo';
import DropdownMenu from '@/components/menu/dropdown';
import ColumnHeader from './header';

// Styles
import { styled } from '@mui/material/styles';
import columnStyles from '@/styles/Todo/column';
import dividerStyles from '@/styles/Divider';

// Utils
import { sortObjArrByOrder } from '@/utils/formatting';

type ColumnProps = {
  columnName: string
  todos: {}[]
}

const StyledColumn = styled(Paper)<PaperProps>(columnStyles);
const StyledDivider = styled(Divider)<DividerProps>(dividerStyles);

export default function Column ({ columnName, todos }: ColumnProps) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortType, setSortType] = useState('createdAt');
  const [sortedTodos, setSortedTodos] = useState(todos);
  const [originalTodos] = useState(todos);

  const sortByType = () => {

  }

  const handleTodoCompletion = ({ target: { value } }: any) => {
    console.log({ value });
  }

  useEffect(() => {
    if (todos?.length) {
      const sortedArr = sortObjArrByOrder(todos, sortType, sortOrder);
      console.log({ sortedArr });
      setSortedTodos(sortedArr || [])
    }
  }, [todos, sortType, sortOrder])

  console.log({ sortOrder, sortType });

  return (
    <StyledColumn>
      <ColumnHeader
        columnName={columnName}
        sortOrder={sortOrder}
        sortType={sortType}
        changeSortByOrder={(order) => setSortOrder(order)}
        handleSortTypeChange={({ target: { value }}) => {setSortType(value)}}
      />
      <StyledDivider />
      <section>
        {sortedTodos?.length
          ? sortedTodos?.map((todo: any) => (
            <Todo key={todo.name} handleCompleted={handleTodoCompletion} {...todo} />
          ))
          : null
        }
      </section>
    </StyledColumn>
  )
}
