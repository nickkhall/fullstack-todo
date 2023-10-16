import { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';

// Styles
import { styled } from '@mui/material/styles';
import formStyles from '@/styles/Form';
import inputStyles from '@/styles/Form/input';
import textFieldStyles from '@/styles/Form/textField';
import buttonStyles from '@/styles/Form/button';

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
}

const StyledForm = styled('form')(formStyles);
const StyledTextField = styled(TextField)<TextFieldProps>(textFieldStyles);
const StyledButton = styled(Button)<ButtonProps>(buttonStyles);

export default function Form({
  inputs,
  buttonText,
  onSubmit
}: FormProps) {
  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit(values);
  }

  const [values, setValues] = useState(inputs.reduce((a: any, c: any) => {
    a[c.name] = '';
    return a;
  }, {}))

  if (inputs?.length) {
    return (
      <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        {inputs.map((i: Input, index) => (
          <div key={i.name}>
            <StyledTextField
              key={i.name} 
              value={values[i.name]}
              onChange={({ target: { value }}) => setValues({ ...values, [i.name]: value })}
              InputProps={{ className: inputStyles.input }}
              {...i}
            />
          </div>
          )
        )}
        <StyledButton type="submit" onClick={onSubmit}>{buttonText}</StyledButton>
      </StyledForm>
    )
  } 

  return null
}
