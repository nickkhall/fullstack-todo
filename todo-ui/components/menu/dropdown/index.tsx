import { useState } from 'react';

// MUI Components
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

type DropdownMenuProps = {
  items: { name: string, key: string }[]
  handleChange: () => void
  selectedItem: string
}

export default function DropdownMenu({ items, handleChange, selectedItem }: DropdownMenuProps) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Typography variant="body2">Type:</Typography>
      <Select
        value={selectedItem}
        onChange={handleChange}
      >
        {items?.length
          ? items.map(({ name, key }) => <MenuItem key={name} value={key}>{name}</MenuItem>)
          : <MenuItem value=""><em>None</em></MenuItem>
        }
      </Select>
    </FormControl>
  )
}
