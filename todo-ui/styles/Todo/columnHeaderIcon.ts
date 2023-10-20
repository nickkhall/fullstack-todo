export default ({ theme, isActive }: any) => ({
 color: isActive ? theme.palette.accent.secondary : theme.palette.text.secondary,
 height: '1.25rem',
  '&:hover': {
    color: theme.palette.accent.secondary,
    cursor: 'pointer'
  }
});
