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

  const isCreating = isCreatingColumn && isNewlyCreatedColumn;

  // @TODO: CLEAN ME UP / ABSTRACT MY COMPONENTS OUT INTO SMALLER COMPONENTS
  return (
    <StyledHeader>
      <StyledHeaderTop>
        {isCreating
          ? (
            <form onSubmit={handleColumnCreate} style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <TextField
                label={<Typography variant="body2">New Column Name</Typography>}
                value={newColumnName}
                onChange={handleColumnNameChange}
                sx={{ height: '50px', width: '100%', '& .MuiInput-root': { borderColor: 'white' } }}
                InputProps={{ sx: { height: '75%', alignItems: 'center', display: 'flex', color: 'white', marginTop: '5px' }}}
                InputLabelProps={{ sx: { height: '22%', alignItems: 'center', display: 'flex' } }}
              />
            </form>
          )
          : <Typography sx={{ color: 'white', fontSize: '1.25rem' }} variant='overline'>{columnName}</Typography>
        }
        {!isCreating && (
          <aside>
            <StyledArrowDownIcon onClick={() => changeSortByOrder('desc')} />
            <StyledArrowUpIcon onClick={() => changeSortByOrder('asc')} />
          </aside>
        )}
      </StyledHeaderTop>
      {!isCreating && (
        <>
          <StyledDivider noMargin={isCreatingColumn && isNewlyCreatedColumn} />
          <StyledHeaderDiv>
            <StyledSection>
              <Typography sx={{ color: 'white', fontSize: '0.85rem' }} variant='caption' aria-label='Order of Todo'>
                Order:
                <em style={{ display: 'block', marginTop: '9px' }}>{SortOrderLabel}</em>
              </Typography>
            </StyledSection>
            <StyledSection>
              <DropdownMenu
                items={sortTypeItems}
                handleChange={handleSortTypeChange}
              />
            </StyledSection>
          </StyledHeaderDiv>
        </>
      )}
      <ContentSectionSpaced>
        {!isCreating ? <AddButton text='Add Todo' title='Add Todo to Column' /> : <h6 style={{ color: 'transparent' }}>_</h6>}
        <DeleteButton text='Delete Column' title='Delete Todo Column' />
      </ContentSectionSpaced>
    </StyledHeader>
  )
}
