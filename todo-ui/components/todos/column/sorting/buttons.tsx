// MUI Components
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

// Styles
import { styled } from '@mui/material/styles';
import sortArrowIconStyles from '@/styles/todo/column/header/icon';

type SortingButtonsProps = {
  sortOrder: string
  changeSortByOrder: (newOrder: string) => void
}

export default function SortingButtons({ sortOrder, changeSortByOrder }: SortingButtonsProps) {
  const StyledArrowUpIcon = styled(VerticalAlignTopIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'asc'}));
  const StyledArrowDownIcon = styled(VerticalAlignBottomIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'desc'}));

  return (
    <aside>
      <StyledArrowDownIcon onClick={() => changeSortByOrder('desc')} />
      <StyledArrowUpIcon onClick={() => changeSortByOrder('asc')} />
    </aside>
  )
}
