import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';

// Styles
import { styled } from '@mui/material/styles';
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
}

export default function Form({ inputs, buttonText }: FormProps) {
  const StyledTextField = styled(TextField)<TextFieldProps>(textFieldStyles);
  const StyledButton = styled(Button)<ButtonProps>(buttonStyles);

  if (inputs?.length) {
    return (
      <form>
        {inputs.map((i: Input) => (
          <div key={i.name}>
            <StyledTextField key={i.name} {...i} InputProps={{ className: inputStyles.input }} />
          </div>
        ))}
        <StyledButton type="submit">{buttonText}</StyledButton>
      </form>
    )
  } 

  return null
}
