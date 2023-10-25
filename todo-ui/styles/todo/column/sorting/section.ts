export default ({ theme }: any) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  '&:last-of-type': {
    justifyContent: 'flex-end'
  }
})
