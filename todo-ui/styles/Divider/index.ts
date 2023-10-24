export default ({ theme, noMargin }: any) => ({
  borderBottom: `1.5px solid ${theme.palette.text.primary}`,
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  color: 'white',
  margin: noMargin ? 0 : '10px 0px',
  width: '100%'
});
