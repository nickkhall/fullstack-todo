import { useState, memo } from 'react';

// MUI Components
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// Styles
import { styled } from '@mui/material/styles';

type DropdownMenuProps = {
  items: { name: string, key: string }[]
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DropdownMenu = ({ items, handleChange }: DropdownMenuProps) => {
  const [selectedItem, setSelectedItem] = useState(items?.length ? items?.[0]?.key : '')

  const setNewSelectedItem = ({ target: { value }}: any) => {
    setSelectedItem(value);
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
      <Typography sx={{ color: 'white', fontSize: '0.85rem' }} variant="caption">Sort Type:</Typography>
      <Select
        sx={{ '& .MuiSelect-select.MuiSelect-select': { color: 'white' } }}
        value={selectedItem}
        onChange={setNewSelectedItem}
      >
        {items?.length
          ? items.map(({ name, key }) => <MenuItem key={name} value={key}>{name}</MenuItem>)
          : <MenuItem value=""><em>None</em></MenuItem>
        }
      </Select>
    </FormControl>
  )
}

export default memo(DropdownMenu);
