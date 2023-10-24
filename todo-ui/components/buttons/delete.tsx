// MUI Components
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';

// Components
import VerticallyAligned from '@/components/content/verticallyAligned';

type AddButtonProps = {
  text: string
  title: string
}

export default function AddButton({ text, title }: AddButtonProps) {
  return (
    <VerticallyAligned>
      <IconButton sx={{ padding: 0 }} title={title} aria-label={title}>
        <Typography variant='body2' sx={{ color: 'white', margin: '0px 5px' }}>{text}</Typography>
        <ClearIcon sx={{ color: 'rgba(161, 0, 14, 0.85)' }} />
      </IconButton>
    </VerticallyAligned>
  );
}

