export default ({ theme }: any) => ({
  alignItems: 'center',
  background: theme.palette.dark.primary,
  //background: 'transparent',
  border: `2px solid ${theme.palette.dark.secondary}`,
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  maxHeight: 200,
  padding: 10,
  marginBottom: 10,
  width: '100%'
})
