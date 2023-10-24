export default ({ theme }: any) => ({
  color: theme.palette.dark.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'flex-start',
  marginRight: 10,
  minWidth: 250,
  maxWidth: 400,
  padding: 10,
  '&:last-of-type': {
    margin: 0
  }
})
