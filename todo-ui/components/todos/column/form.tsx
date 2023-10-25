import { useState } from 'react';

// MUI Components
import TextField from '@mui/material/TextField';
import Typography, { TypographyProps } from '@mui/material/Typography';

type ColumnCreateFormProps = {
  handleColumnCreate: (newColumnName: string) => void
}

export default function ColumnCreateForm({ handleColumnCreate }: ColumnCreateFormProps) {
  const [newColumnName, setNewColumnName] = useState('');

  const handleColumnNameChange = ({ target: { value }}: any) => {
    setNewColumnName(value);
  }

  const handleFormSubmit = () => {
    if (!newColumnName) return;

    handleColumnCreate(newColumnName);
  }

  return (
    <form onSubmit={handleFormSubmit} style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField
        label={<Typography variant="body2">New Column Name</Typography>}
        value={newColumnName}
        onChange={handleColumnNameChange}
        sx={{ height: '50px', width: '100%', '& .MuiInput-root': { borderColor: 'white' } }}
        InputProps={{ sx: { height: '75%', alignItems: 'center', display: 'flex', color: 'white', marginTop: '5px' }}}
        InputLabelProps={{ sx: { height: '22%', alignItems: 'center', display: 'flex' } }}
      />
    </form>
  );
}
