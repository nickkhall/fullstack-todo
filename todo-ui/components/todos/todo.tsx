import { ReactNode, PropsWithChildren, useState } from 'react'; 

// MUI Components
import Paper, { PaperProps } from '@mui/material/Paper'
import Typography, { TypographyProps } from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

// MUI Icons
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditIcon from '@mui/icons-material/Edit';

// Components
import VerticallyAligned from '@/components/content/verticallyAligned';

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/Todo';
import checkboxStyles from '@/styles/Todo/checkbox';

type TodoProps = {
  name: string
  key: string
  completed: boolean
  handleCompleted: () => void
  handleUpdateName: (name: string) => void
}

const StyledTodo = styled(Paper)<PaperProps>(styles);
const StyledCheckbox = styled(Checkbox)<CheckboxProps>(checkboxStyles);

export default function Todo ({
  name,
  completed,
  handleCompleted,
  handleUpdateName
}: TodoProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTodoName, setNewTodoName] = useState<string>(name);

  if (!isEditing && newTodoName !== name) {
    handleUpdateName(newTodoName);
  }

  return (
    <StyledTodo>
      {isEditing
        ? <TextField value={newTodoName} onChange={({ target: { value }}: any) => {setNewTodoName(value)}} />
        : <Typography variant="body">{name}</Typography>
      }
      <VerticallyAligned>
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          {!isEditing
            ? <EditIcon sx={{ color: 'white' }} />
            : <SaveAsIcon sx={{ color: 'white' }} />
          }
        </IconButton>
        <StyledCheckbox onChange={handleCompleted} />
      </VerticallyAligned>
    </StyledTodo>
  )
}
