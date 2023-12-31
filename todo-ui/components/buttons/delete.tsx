// MUI Components
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';

// Components
import ContentVertical from '@/components/content/vertical';

type AddButtonProps = {
  text: string
  title: string
}

export default function AddButton({ text, title }: AddButtonProps) {
  return (
    <ContentVertical>
      <IconButton sx={{ padding: 0 }} title={title} aria-label={title}>
        <Typography variant='body2' sx={{ color: 'white', margin: '0px 5px' }}>{text}</Typography>
        <ClearIcon sx={{ color: '#F4364C' }} />
      </IconButton>
    </ContentVertical>
  );
}

