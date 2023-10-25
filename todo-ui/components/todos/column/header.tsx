import { useState } from 'react';

// MUI Components
import TextField from '@mui/material/TextField';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Components
import ContentSectionSpaced from '@/components/content/spaced';
import ContentSectionColumn from '@/components/content/column';
import AddButton from '@/components/buttons/add';
import DeleteButton from '@/components/buttons/delete';
import StyledDivider from '@/components/content/divider';
import ColumnTodoSorting from './sorting';
import SortingButtons from './sorting/buttons';
import HeaderForm from './form';

// Styles
import { styled } from '@mui/material/styles';
import headerStyles from '@/styles/todo/column/header';

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

const StyledHeader = styled('div')(headerStyles);

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
  const isCreating = isCreatingColumn && isNewlyCreatedColumn;

  return (
    <StyledHeader>
      <ContentSectionSpaced>
        {isCreating
          ? <HeaderForm handleColumnCreate={handleColumnCreate} />
          : <Typography sx={{ color: 'white', fontSize: '1.25rem' }} variant='overline'>{columnName}</Typography>
        }
        {!isCreating && <SortingButtons sortOrder={sortOrder} changeSortByOrder={changeSortByOrder} />}
      </ContentSectionSpaced>
      {!isCreating && (
        <ColumnTodoSorting
          isCreatingColumn={isCreatingColumn}
          handleSortTypeChange={handleSortTypeChange}
          isNewlyCreatedColumn={isNewlyCreatedColumn}
          sortOrder={sortOrder}
        />
      )}
      <ContentSectionSpaced>
        {!isCreating
          ? <AddButton text='Add Todo' title='Add Todo to Column' />
          : <h6 style={{ color: 'transparent' }}>_</h6>
        }
        <DeleteButton text='Delete Column' title='Delete Todo Column' />
      </ContentSectionSpaced>
    </StyledHeader>
  )
}
