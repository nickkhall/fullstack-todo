import { ReactNode, PropsWithChildren, useState } from 'react'; 
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography, { TypographyProps } from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

import { styled } from '@mui/material/styles';
import styles from '@/styles/Todo';
import checkboxStyles from '@/styles/Todo/checkbox';

type TodoProps = {
  name: string
  key: string
  completed: boolean
  handleCompleted: () => void
}

const StyledTodo = styled(Paper)<PaperProps>(styles);
const StyledCheckbox = styled(Checkbox)<CheckboxProps>(checkboxStyles);

export default function Todo ({ name, completed, handleCompleted }: TodoProps) {
  return (
    <StyledTodo>
      <Typography variant="body">{name}</Typography>
      <StyledCheckbox onChange={handleCompleted} />
    </StyledTodo>
  )
}
