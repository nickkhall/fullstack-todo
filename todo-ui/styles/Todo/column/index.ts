export default ({ theme }: any) => ({
  background: theme.palette.dark.linearDarkGrey,
  border: `2px solid ${theme.palette.dark.secondary}`,
  color: theme.palette.dark.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '97%',
  justifyContent: 'flex-start',
  margin: '10px 5px',
  minWidth: 300,
  maxWidth: 350,
  padding: 10,
  '&:first-of-type': {
    margin: '10px 0px 10px 5px'
  },
  width: '100%'
})
