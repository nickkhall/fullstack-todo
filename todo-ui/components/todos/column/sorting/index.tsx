// MUI Components
import Typography, { TypographyProps } from '@mui/material/Typography';

// Components
import StyledDivider from '@/components/content/divider';
import DropdownMenu from '@/components/menu/dropdown';

// Styles
import { styled } from '@mui/material/styles';
import columnSortingHeaderStyles from '@/styles/todo/column/sorting/header';
import columnSortingSectionStyles from '@/styles/todo/column/sorting/section';
import sortingLabelRedStyles from '@/styles/todo/column/sorting/label/red';
import sortingLabelGreenStyles from '@/styles/todo/column/sorting/label/green';

// Constants
import { sortTypeItems } from '@/constants/Menu/sortTypeItems';

type ColumnTodoSortingProps = {
  isCreatingColumn: boolean
  isNewlyCreatedColumn: boolean
  sortOrder: string
  handleSortTypeChange: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledSortingHeader = styled('div')(columnSortingHeaderStyles);
const StyledSortingSection = styled('section')(columnSortingSectionStyles);
const StyledSortLabelRed = styled(Typography)<TypographyProps>(sortingLabelRedStyles);
const StyledSortLabelGreen = styled(Typography)<TypographyProps>(sortingLabelGreenStyles);

export default function ColumnTodoSorting({
  isCreatingColumn,
  isNewlyCreatedColumn,
  sortOrder,
  handleSortTypeChange
}: ColumnTodoSortingProps) {
  const SortOrderLabel = sortOrder === 'asc'
    ? <StyledSortLabelGreen variant='body2'>Ascending</StyledSortLabelGreen>
    : <StyledSortLabelRed variant='body2'>Descending</StyledSortLabelRed>

  return (
    <>
      <StyledDivider noMargin={isCreatingColumn && isNewlyCreatedColumn} />
      <StyledSortingHeader>
        <StyledSortingSection>
          <Typography sx={{ color: 'white', fontSize: '0.85rem' }} variant='caption' aria-label='Order of Todo'>
            Order:
            <em style={{ display: 'block', marginTop: '9px' }}>{SortOrderLabel}</em>
          </Typography>
        </StyledSortingSection>
        <StyledSortingSection>
          <DropdownMenu
            items={sortTypeItems}
            handleChange={handleSortTypeChange}
          />
        </StyledSortingSection>
      </StyledSortingHeader>
    </>
  )
}
