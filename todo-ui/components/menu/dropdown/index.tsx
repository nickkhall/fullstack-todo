import { useState } from 'react';

// MUI Components
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// Styles
import { styled } from '@mui/material/styles';
import dropdownStyles from '@/styles/Menu/dropdown';

type DropdownMenuProps = {
  items: { name: string, key: string }[]
  handleChange: ({ target: { value } }: { target: { value: any; }; }) => void
  selectedItem: string
}

const StyledSelect = styled(Select)<SelectProps>(dropdownStyles);

export default function DropdownMenu({ items, handleChange, selectedItem }: DropdownMenuProps) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
      <Typography variant="body2">Sort Type:</Typography>
      <StyledSelect
        value={selectedItem}
        onChange={handleChange}
      >
        {items?.length
          ? items.map(({ name, key }) => <MenuItem key={name} value={key}>{name}</MenuItem>)
          : <MenuItem value=""><em>None</em></MenuItem>
        }
      </StyledSelect>
    </FormControl>
  )
}
