import { ReactNode, useState, useEffect } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

// Components
import Todo from './todo';
import DropdownMenu from '@/components/menu/dropdown';

// Constants
import { sortTypeItems } from '@/constants/Menu/sortTypeItems';

import { styled } from '@mui/material/styles';
import columnStyles from '@/styles/Todo/column';
import columnHeaderStyles from '@/styles/Todo/columnHeader';
import columnHeaderTopStyles from '@/styles/Todo/columnHeaderTop';
import columnHeaderDivStyles from '@/styles/Todo/columnHeaderDiv';
import sortArrowIconStyles from '@/styles/Todo/columnHeaderIcon';
import dividerStyles from '@/styles/Divider';
import sortTypeRedStyles from '@/styles/Todo/sortTypeRed';
import sortTypeGreenStyles from '@/styles/Todo/sortTypeGreen';

type ColumnProps = {
  columnName: string
  todos: {}[]
}

const StyledColumn = styled(Paper)<PaperProps>(columnStyles);
const StyledDivider = styled(Divider)<DividerProps>(dividerStyles);
const StyledHeader = styled('div')(columnHeaderStyles);
const StyledHeaderTop = styled('div')(columnHeaderTopStyles);
const StyledHeaderDiv = styled('div')(columnHeaderDivStyles);
const StyledArrowDownIcon = styled(VerticalAlignBottomIcon)(sortArrowIconStyles);
const StyledArrowUpIcon = styled(VerticalAlignTopIcon)(sortArrowIconStyles);
const StyledSortTypeRed = styled(Typography)<TypographyProps>(sortTypeRedStyles);
const StyledSortTypeGreen = styled(Typography)<TypographyProps>(sortTypeGreenStyles);


export default function Column ({ columnName, todos }: ColumnProps) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortType, setSortType] = useState('createdAt');
  const [sortedTodos, setSortedTodos] = useState(todos);
  const [originalTodos] = useState(todos);

  const sortByOrder = () => {
    if (todos?.length) {
      setSortedTodos(todos.sort((a: {}, b: {}) => {
        console.log({ sortType, 'a[sortType]': a[sortType] });
        if (typeof a[sortType] === 'boolean') {
          if (!a[sortType] && b[sortType]) return sortOrder === 'asc' ? 1 : -1;
          if (a[sortType] && !b[sortType]) return sortOrder === 'asc' ? -1 : 1;
          return 0
        }

        if (a[sortType] > b[sortType]) return (sortOrder === 'asc' ? 1 : -1);
        if (a[sortType] < b[sortType]) return (sortOrder === 'asc' ? -1 : 1);
        return 0;
      }))
    }
  }

  const changeSortByOrder = (order: string) => {
    setSortOrder(order);
  }

  const sortByType = () => {

  }

  const handleSortTypeChange = ({ target: { value } }) => {
    setSortType(value);
  }


  useEffect(() => {
    sortByOrder();
  }, [sortOrder, sortByOrder, sortedTodos])

  const SortOrderLabel = sortOrder === 'asc'
    ? <StyledSortTypeGreen variant="body2">Ascending</StyledSortTypeGreen>
    : <StyledSortTypeRed variant="body2">Descending</StyledSortTypeRed>

  return (
    <StyledColumn>
      <StyledHeader>
        <StyledHeaderTop>
          <Typography variant="h6">{columnName}</Typography>
          <aside>
            <StyledArrowDownIcon onClick={() => changeSortByOrder('desc')} />
            <StyledArrowUpIcon onClick={() => changeSortByOrder('asc')} />
          </aside>
        </StyledHeaderTop>
        <StyledHeaderDiv>
          <section>
            <Typography variant="body2">
              {'Order: '}
              {SortOrderLabel}
            </Typography>
          </section>
          <section>
            <DropdownMenu
              items={sortTypeItems}
              selectedItem={sortType}
              handleChange={handleSortTypeChange}
            />
          </section>
        </StyledHeaderDiv>
      </StyledHeader>
      <StyledDivider />
      <section>
        {sortedTodos?.length
          ? sortedTodos?.map(todo => (
            <Todo key={todo.name} {...todo} />
          ))
          : null
        }
      </section>
    </StyledColumn>
  )
}
