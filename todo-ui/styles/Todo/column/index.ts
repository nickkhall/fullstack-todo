export default ({ theme }: any) => ({
  color: theme.palette.dark.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '97%',
  justifyContent: 'flex-start',
  margin: 10,
  minWidth: 300,
  maxWidth: 350,
  padding: 10,
  '&:last-of-type': {
    margin: '10px 0px'
  },
  width: '100%'
})
