import { useState } from 'react';

// MUI Components
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import TextField from '@mui/material/TextField';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Components
import DropdownMenu from '@/components/menu/dropdown';
import ContentSectionSpaced from '@/components/content/spaced';
import AddButton from '@/components/buttons/add';
import DeleteButton from '@/components/buttons/delete';
import StyledDivider from '@/components/content/divider';

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
  isCreatingColumn: boolean
  isNewlyCreatedColumn: boolean
  handleColumnCreate: (columnName: string) => void
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
  handleSortTypeChange,
  isCreatingColumn,
  isNewlyCreatedColumn,
  handleColumnCreate
}: ColumnHeaderProps) {
  const [newColumnName, setNewColumnName] = useState<string>('');

  const StyledArrowUpIcon = styled(VerticalAlignTopIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'asc'}));
  const StyledArrowDownIcon = styled(VerticalAlignBottomIcon)(({ theme }) => sortArrowIconStyles({theme, isSorting: sortOrder === 'desc'}));

  const SortOrderLabel = sortOrder === 'asc'
    ? <StyledSortTypeGreen variant='body2'>Ascending</StyledSortTypeGreen>
    : <StyledSortTypeRed variant='body2'>Descending</StyledSortTypeRed>

  const handleColumnNameChange = ({ target: { value }}: any) => {
    setNewColumnName(value);
  }

  return (
    <StyledHeader>
      <StyledHeaderTop>
        {(isCreatingColumn && isNewlyCreatedColumn)
          ? (
            <form onSubmit={handleColumnCreate} style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
              <TextField
                label={<Typography variant="body2">New Column Name</Typography>}
                value={newColumnName}
                onChange={handleColumnNameChange}
                sx={{ height: '50px' }}
                InputProps={{ sx: { height: '75%', alignItems: 'center', display: 'flex' } }}
                InputLabelProps={{ sx: { height: '25%', alignItems: 'center', display: 'flex' } }}
              />
            </form>
          )
          : <Typography variant='h6'>{columnName}</Typography>
        }
        <aside>
          <StyledArrowDownIcon onClick={() => changeSortByOrder('desc')} />
          <StyledArrowUpIcon onClick={() => changeSortByOrder('asc')} />
        </aside>
      </StyledHeaderTop>
      <StyledDivider noMargin={isCreatingColumn && isNewlyCreatedColumn} />
      <StyledHeaderDiv>
        <StyledSection>
          <Typography variant='body2' aria-label='Order of Todo'>
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
      <StyledDivider />
      <ContentSectionSpaced>
        <AddButton text='Add Todo' title='Add Todo to Column' />
        <DeleteButton text='Delete Column' title='Delete Todo Column' />
      </ContentSectionSpaced>
    </StyledHeader>
  )
}
