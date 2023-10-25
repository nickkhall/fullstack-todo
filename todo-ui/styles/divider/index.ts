export default ({ theme, noMargin }: any) => ({
  borderBottom: `1.5px solid ${theme.palette.light.primary}`,
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  margin: noMargin ? 0 : '10px 0px',
  width: '100%'
});
