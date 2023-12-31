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
import ContentVertical from '@/components/content/vertical';

// Styles
import { styled } from '@mui/material/styles';
import styles from '@/styles/todo';
import checkboxStyles from '@/styles/todo/checkbox';

type TodoProps = {
  id: string
  name: string
  key: string
  completed: boolean
  handleCompleted: () => void
}

const StyledTodo = styled(Paper)<PaperProps>(styles);
const StyledCheckbox = styled(Checkbox)<CheckboxProps>(checkboxStyles);

export default function Todo ({
  id,
  name,
  completed,
  handleCompleted
}: TodoProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTodoName, setNewTodoName] = useState<string>(name);

  const handleEdit = () => {
    if (!isEditing && newTodoName !== name) {
      // editTodo(newTodoName, id);
      setIsEditing(false);
    }
  }

  return (
    <StyledTodo>
      {isEditing
        ? <TextField value={newTodoName} onChange={({ target: { value }}: any) => {setNewTodoName(value)}} />
        : <Typography variant="body">{name}</Typography>
      }
      <ContentVertical>
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          {!isEditing
            ? <EditIcon sx={{ color: 'white' }} />
            : <SaveAsIcon sx={{ color: 'white' }} onClick={handleEdit} />
          }
        </IconButton>
        <StyledCheckbox onChange={handleCompleted} />
      </ContentVertical>
    </StyledTodo>
  )
}
