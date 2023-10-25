
// MUI Icons
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

type PaginatedPagesProps = {
  numberOfColumns: number
  paginatedNumber: number
  currentPageNum: number
}

const IconArray = [
  { icon: LooksOneIcon, key: 1 },
  { icon: LooksTwoIcon, key: 2 },
  { icon: Looks3Icon, key: 3 },
  { icon: Looks4Icon, key: 4 },
  { icon: Looks5Icon, key: 5 }
];

export default function PaginatedPages({ numberOfColumns, paginatedNumber, currentPageNum }: PaginatedPagesProps) { 
  if (numberOfColumns < 1) return null;

  const calculateNumberOfIconsToRender = () => {
    return (numberOfColumns % paginatedNumber) + 1;
  }

  const filteredIconArr = IconArray.filter((_, i) => (i + 1) <= calculateNumberOfIconsToRender());

  return filteredIconArr.map(({ icon: Icon, key }: any) => (
    <Icon
      key={key}
      sx={{ color: key === currentPageNum ? 'green' : 'white', fontSize: '2rem' }}
    />
  ));
}
