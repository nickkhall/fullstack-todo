export default ({ theme }: any) => ({
  background: `${theme.palette.dark.linear}`,
  color: theme.palette.text.secondary,
  padding: '10px 20px',
  margin: '1px 0px',
  '&:hover': {
    background: theme.palette.accent.secondary
  },
  '&:first-of-type': {
    margin: 0
  },
  '&:last-of-type': {
    margin: 0
  }
})
