import { useState } from 'react';

// MUI Components
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Styles
import { styled } from '@mui/material/styles';
import addTodoColumnHeaderFormStyles from '@/styles/Todo/headerForm';
import inputStyles from '@/styles/Form/input';
import textFieldStyles from '@/styles/Todo/headerFormTextField';
import buttonGreenStyles from '@/styles/Form/buttonGreen';
import buttonRedStyles from '@/styles/Form/buttonRed';

type Input = {
  name: string
  type: string
  label: string
}

type FormProps = {
  inputs: Input[]
  buttonText: string
  values: {}
  onSubmit: ({}) => void
  isAddingColumn: boolean
  onIsAddingColumn: () => void
}

const StyledForm = styled('form')(addTodoColumnHeaderFormStyles);
const StyledTextField = styled(TextField)<TextFieldProps>(textFieldStyles);
const StyledGreenButton = styled(Button)<ButtonProps>(buttonGreenStyles);
const StyledRedButton = styled(Button)<ButtonProps>(buttonRedStyles);

export default function Form({
  inputs,
  buttonText,
  onSubmit,
  onIsAddingColumn
}: FormProps) {
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [columnName, setColumnName] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit(columnName);
  }

  const showForm = () => {
    setIsAddingColumn(!isAddingColumn);
  }

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
      {!isAddingColumn && <Typography variant="h5" sx={{ color: 'white' }}>My Todos</Typography>}
      {isAddingColumn && (
        <>
          <StyledTextField
            key="columnName" 
            value={columnName}
            onChange={({ target: { value }}) => setColumnName(value)}
            label="Column Name"
            InputProps={{ className: inputStyles.input }}
          />
          <StyledGreenButton
            type="submit"
            onClick={onSubmit}
          >
            <AddIcon />
          </StyledGreenButton>
          <StyledRedButton sx={{ marginLeft: '5px' }} onClick={showForm}>
            <HighlightOffIcon />
          </StyledRedButton>
        </>
      )}
      {!isAddingColumn && (
        <IconButton
          sx={{ color: "white" }}
          title="Add Todo Column"
          aria-label="Add Todo Column"
          onClick={showForm}
        >
          <AddIcon />
        </IconButton>
      )}
    </StyledForm>
  )
}
