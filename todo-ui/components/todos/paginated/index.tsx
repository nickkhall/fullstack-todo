// Components
import PaginatedPages from './pages';

// Styles
import { styled } from '@mui/material/styles';
import paginatedContainerStyles from '@/styles/todo/paginated';

type PaginatedContainerProps = {
  todoColumns: Array<object> | null
  paginatedNumber: number
  currentPageNum: number
}

const StyledPaginatedContainer = styled('div')(paginatedContainerStyles);

export default function PaginatedContainer({ todoColumns, paginatedNumber, currentPageNum }: PaginatedContainerProps) {
  return (
    <StyledPaginatedContainer>
      <PaginatedPages
        numberOfColumns={todoColumns?.length || 0}
        paginatedNumber={paginatedNumber}
        currentPageNum={currentPageNum}
      /> 
    </StyledPaginatedContainer>
  );
}
