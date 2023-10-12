import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    dark: {
      primary: '#222629',
      secondary: '#353941',
      tertiary: '#474B4F',
      fourth: '#6B6E70',
      //linear: 'linear-gradient(45deg, rgba(71,75,79,1) 47%, rgba(107,110,112,1) 100%)'
      linear: 'linear-gradient(153deg, rgba(71,75,79,0.9570203081232493) 35%, rgba(126,129,132,1) 100%)'
    },
    accent: {
      primary: '#61892F',
      secondary: '#86C232',
      linear: 'linear-gradient(45deg, rgba(134,194,50,1) 0%, rgba(97,137,47,0.9122023809523809) 73%)'
    },
    light: {
      primary: '#AAABB8'
    },
    text: {
      primary: '#000',
      secondary: '#FFF'
    }
  }
})
