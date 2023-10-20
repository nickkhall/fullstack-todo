import { useState } from 'react';

// MUI Components
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';

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
  isAddingColumn,
  onIsAddingColumn
}: FormProps) {
  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit(values);
  }

  const [values, setValues] = useState(inputs.reduce((a: any, c: any) => {
    a[c.name] = '';
    return a;
  }, {}))

  const showForm = () => {
    onIsAddingColumn();
  }

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
      {isAddingColumn && inputs?.length && (
        <>
          {inputs.map((i: Input, index) => (
            <StyledTextField
              key={i.name} 
              value={values[i.name]}
              onChange={({ target: { value }}) => setValues({ ...values, [i.name]: value })}
              InputProps={{ className: inputStyles.input }}
              {...i}
            />
          ))}
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
