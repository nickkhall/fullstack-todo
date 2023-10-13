import { styled } from '@mui/material/styles';

// Components
import Paper from '@mui/material/Paper';
import MenuList, { MenuListProps } from '@mui/material/MenuList';
import SidebarMenuItem from 'components/Menu/item';

// Styles
import styles from 'styles/Menu';

type SidebarMenuProps = {
  items: object[]
}

const StyledSidebarMenu = styled(MenuList)<MenuListProps>(styles);

export default function SidebarMenu ({ items, ...props }: SidebarMenuProps) {
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

