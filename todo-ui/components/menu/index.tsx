import { styled } from '@mui/material/styles';

// Components
import Paper from '@mui/material/Paper';
import MenuList, { MenuListProps } from '@mui/material/MenuList';
import SidebarMenuItem from '@/components/menu/item';

// Styles
import styles from '@/styles/menu';

type SidebarMenuProps = {
  items: object[]
}

export default function SidebarMenu ({ items, ...props }: SidebarMenuProps) {
  const StyledSidebarMenu = styled(MenuList)<MenuListProps>(styles);

  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <StyledSidebarMenu>
        {items.map((itemProps: any) => (
          <SidebarMenuItem
            key={itemProps.name}
            {...itemProps}
            {...props}
          />
        ))}
      </StyledSidebarMenu>
    </Paper>
  )
}

