// MUI
import { styled } from '@mui/material/styles';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Components
import ContentSectionCentered from '@/components/content/centered';

// Styles
import loaderStyles from '@/styles/Loader';

type LoaderProps = {
  text?: string
}

const StyledLoader = styled(CircularProgress)(loaderStyles);

export default function Loader({ text }: LoaderProps) {
  if (text) {
    return (
      <ContentSectionCentered>
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
          <StyledLoader />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </ContentSectionCentered>
    )
  }

  return (
    <ContentSectionCentered>
      <StyledLoader />
    </ContentSectionCentered>
  ) 
}
