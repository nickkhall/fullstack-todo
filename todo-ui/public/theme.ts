import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    dark: {
      primary: '#222629',
      secondary: '#353941',
      tertiary: '#474B4F',
      fourth: '#6B6E70',
      linear: 'linear-gradient(153deg, rgba(71,75,79,0.9570203081232493) 35%, rgba(57,60,63,1) 100%)'
    },
    accent: {
      primary: '#61892F',
      secondary: '#86C232',
      linear: 'linear-gradient(125deg, rgba(88,129,32,1) 71%, rgba(62,90,22,1) 100%)'
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
