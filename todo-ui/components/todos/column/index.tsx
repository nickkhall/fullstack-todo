import { ReactNode, useState, useEffect, useCallback } from 'react'; 

// MUI Components
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography, { TypographyProps } from '@mui/material/Typography';

// Components
import Todo from '../todo';
import DropdownMenu from '@/components/menu/dropdown';
import ColumnHeader from './header';

// Styles
import { styled } from '@mui/material/styles';
import columnStyles from '@/styles/Todo/column';

// Utils
import { sortObjArrByOrder } from '@/utils/formatting';

type ColumnProps = {
  columnName: string
  todos: Array<{}>
  isCreatingColumn: boolean
  isNewlyCreatedColumn: boolean
}

const StyledColumn = styled(Paper)<PaperProps>(columnStyles);

export default function Column ({
  columnName,
  todos,
  isCreatingColumn,
  isNewlyCreatedColumn
}: ColumnProps) {
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
      setSortedTodos(sortedArr || [])
    }
  }, [todos, sortType, sortOrder])

  return (
    <StyledColumn>
      <ColumnHeader
        isNewlyCreatedColumn={isNewlyCreatedColumn}
        isCreatingColumn={isCreatingColumn}
        columnName={columnName}
        sortOrder={sortOrder}
        sortType={sortType}
        changeSortByOrder={(order) => setSortOrder(order)}
        handleSortTypeChange={({ target: { value }}: any) => {setSortType(value)}}
      />
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
