// MUI Components
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Components
import DropdownMenu from '@/components/menu/dropdown';

// Styles
import { styled } from '@mui/material/styles';
import columnHeaderStyles from '@/styles/Todo/column/header';
import columnHeaderSectionStyles from '@/styles/Todo/column/headerSection';
import columnHeaderTopStyles from '@/styles/Todo/column/headerTop';
import columnHeaderDivStyles from '@/styles/Todo/column/headerDiv';
import sortArrowIconStyles from '@/styles/Todo/column/headerIcon';
import sortTypeRedStyles from '@/styles/Todo/sortTypeRed';
import sortTypeGreenStyles from '@/styles/Todo/sortTypeGreen';

// Constants
import { sortTypeItems } from '@/constants/Menu/sortTypeItems';

type ColumnHeaderProps = {
  columnName: string
  sortOrder: string
  sortType: string
  changeSortByOrder: (order: string) => void
  handleSortTypeChange: ({ target: { value } }: any) => void
}

const StyledHeader = styled('div')(columnHeaderStyles);
const StyledHeaderTop = styled('div')(columnHeaderTopStyles);
const StyledHeaderDiv = styled('div')(columnHeaderDivStyles);
const StyledSortTypeRed = styled(Typography)<TypographyProps>(sortTypeRedStyles);
const StyledSortTypeGreen = styled(Typography)<TypographyProps>(sortTypeGreenStyles);
const StyledSection = styled('section')(columnHeaderSectionStyles);

export default function ColumnHeader({
  columnName,
  sortOrder,
  sortType,
  changeSortByOrder,
  handleSortTypeChange
}: ColumnHeaderProps) {
  const StyledArrowUpIcon = styled(VerticalAlignTopIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'asc'}));
  const StyledArrowDownIcon = styled(VerticalAlignBottomIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'desc'}));

  const SortOrderLabel = sortOrder === 'asc'
    ? <StyledSortTypeGreen variant="body2">Ascending</StyledSortTypeGreen>
    : <StyledSortTypeRed variant="body2">Descending</StyledSortTypeRed>

  return (
      <StyledHeader>
        <StyledHeaderTop>
          <Typography variant="h6">{columnName}</Typography>
          <aside>
            <StyledArrowDownIcon onClick={() => changeSortByOrder('desc')} />
            <StyledArrowUpIcon onClick={() => changeSortByOrder('asc')} />
          </aside>
        </StyledHeaderTop>
        <StyledHeaderDiv>
          <StyledSection>
            <Typography variant="body2" aria-label="Order of Todo">
              Order:
              <em style={{ display: 'block', marginTop: '13px' }}>{SortOrderLabel}</em>
            </Typography>
          </StyledSection>
          <StyledSection>
            <DropdownMenu
              items={sortTypeItems}
              handleChange={handleSortTypeChange}
            />
          </StyledSection>
        </StyledHeaderDiv>
      </StyledHeader>
  )
}
