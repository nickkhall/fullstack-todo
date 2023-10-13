import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Form';

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
  const StyledTextField = styled(TextField)<TextFieldProps>(styles);
  const StyledButton = styled(Button)<ButtonProps>(styles);

  if (inputs?.length) {
    return (
      <form>
        {inputs.map((i: Input) => (
          <div key={i.name}>
            <StyledTextField key={i.name} {...i} />
          </div>
        ))}
        <StyledButton type="submit">{buttonText}</StyledButton>
      </form>
    )
  } 

  return null
}
