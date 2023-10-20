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
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [columnName, setColumnName] = useState('');

  const handleAddColumn = () => {
    if (columnName) {
      onAddColumn(columnName);
    }
  }

  const handleIsAddingColumn = () => {
    setIsAddingColumn(!isAddingColumn);
  }

  return (
    <StyledHeader>
      <AddTodoColumnForm
        isAddingColumn={isAddingColumn}
        onIsAddingColumn={handleIsAddingColumn}
        inputs={addTodoColumnInputs}
        buttonText="Add"
        onSubmit={handleAddColumn}
      />
    </StyledHeader>
  );
}
