import { useState } from 'react';

// Components
import TodoHeaderForm from '@/components/todos/header/form';

// Constants
import { addTodoColumnInputs } from '@/constants/Todos/addTodoColumnInputs';

// Styles
import { styled } from '@mui/material/styles';
import addTodoColumnHeaderStyles from '@/styles/Todo/addColumnHeader';

// API
import { createTodoColumn } from '@/api/todos';

type AddTodosHeaderProps = {
  handleColumnCreate: (x: any) => void
}

const StyledHeader = styled('div')(addTodoColumnHeaderStyles);

export default function AddTodosHeader({ handleColumnCreate }: AddTodosHeaderProps) {
  const handleAddColumn = async (columnName: string) => {
    if (columnName) {
      const updatedColumns = await createTodoColumn(columnName);
      handleColumnCreate(updatedColumns);
    }
  }

  return (
    <StyledHeader>
      <TodoHeaderForm
        inputs={addTodoColumnInputs}
        buttonText="Add"
        onSubmit={handleAddColumn}
      />
    </StyledHeader>
  );
}
