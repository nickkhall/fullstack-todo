import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    dark: {
      primary: '#222629',
      secondary: '#353941',
      tertiary: '#474B4F',
      fourth: '#6B6E70',
      linear: 'linear-gradient(153deg, rgba(71,75,79,0.9570203081232493) 35%, rgba(57,60,63,1) 100%)',
      linearDiagonal: 'linear-gradient(222deg, rgba(71,75,79,1) 9%, rgba(53,57,65,1) 31%, rgba(34,38,41,1) 95%)',
      linearDiagonalReverse: 'linear-gradient(42deg, rgba(71,75,79,1) 9%, rgba(53,57,65,1) 31%, rgba(34,38,41,1) 95%)'
    },
    accent: {
      primary: '#61892F',
      secondary: '#86C232',
      linear: 'linear-gradient(125deg, rgba(88,129,32,1) 71%, rgba(62,90,22,1) 100%)',
      linearTransparent: 'linear-gradient(125deg, rgba(88,129,32,1) 71%, rgba(62,90,22,0.1) 100%)'
    },
    light: {
      primary: '#AAABB8'
    },
    text: {
      primary: '#000',
      secondary: '#FFF'
    },
    arbitrary: {
      red: '#8B0000'
    }
  }
})
