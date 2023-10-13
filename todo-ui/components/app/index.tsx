import { styled } from '@mui/material/styles';
import styles from '@/styles/main'

type MainProps = {
  children: JSX.Element[]
}

function Main ({ children, ...props }: MainProps) {
  const MainComponent = styled('main')(styles)

  return (
    <MainComponent {...props}>
      {children}
    </MainComponent>
  )
}

export default Main;
