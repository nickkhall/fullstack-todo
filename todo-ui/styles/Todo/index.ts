export default ({ theme }: any) => ({
  alignItems: 'center',
  background: theme.palette.accent.linear,
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Arial',
  margin: '5px 0',
  padding: 10,
  '&:hover': {
    background: theme.palette.accent.secondary,
    cursor: 'pointer'
  }
})
