import { useState } from 'react';

// Components
import AddTodoColumnForm from '@/components/todos/headerForm';

// Constants
import { addTodoColumnInputs } from '@/constants/Todos/addTodoColumnInputs';

// Styles
import { styled } from '@mui/material/styles';
import addTodoColumnHeaderStyles from '@/styles/Todo/addColumnHeader';

type AddTodosHeaderProps = {
  onAddColumn: (name: string) => void
}

const StyledHeader = styled('div')(addTodoColumnHeaderStyles);

export default function AddTodosHeader({ onAddColumn }: AddTodosHeaderProps) {
  const [columnName, setColumnName] = useState('');

  const handleAddColumn = () => {
    if (columnName) {
      onAddColumn(columnName);
    }
  }

  return (
    <StyledHeader>
      <AddTodoColumnForm inputs={addTodoColumnInputs} buttonText="Add" onSubmit={handleAddColumn} />
    </StyledHeader>
  );
}
