import { styled } from '@mui/material/styles';
import styles from 'styles/main'

type MainProps = {
  children: JSX.Element[]
}

const MainComponent = styled('main')(styles)

function Main ({ children, ...props }: MainProps) {
  return (
    <MainComponent {...props}>
      {children}
    </MainComponent>
  )
}

export default Main;
