export default ({ theme }: any) => ({
  alignItems: 'center',
  background: theme.palette.accent.secondary,
  color: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Arial',
  margin: '5px 0',
  padding: 10,
  width: '100%',
  '&:hover': {
    background: theme.palette.accent.linear,
    cursor: 'pointer'
  }
})
