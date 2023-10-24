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
  onAddColumn: (name: string) => void
}

const StyledHeader = styled('div')(addTodoColumnHeaderStyles);

export default function AddTodosHeader({ onAddColumn }: AddTodosHeaderProps) {
  const handleAddColumn = (columnName: string) => {
    if (columnName) {
      createTodoColumn(columnName);
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
