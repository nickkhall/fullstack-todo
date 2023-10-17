import type { FunctionComponent } from 'react'
import { useContext } from 'react';

// Context
import { AuthContext } from '@/context/auth';

// Components
import ContentSectionCentered from '@/components/content/centered';
import Form from '@/components/form';

// Styles
import { styled } from '@mui/material/styles';
import loginContainerStyles from '@/styles/Login/container';

// Services
import { login } from 'api/auth';

// Utils
import { decodeJWT } from '@/utils/jwt';
import { setUserInStorage } from '@/utils/storage';

type LoginProps = {

}

type LoginDataProps = {
  email: string
  password: string
}

export default function Login<FunctionComponent> () {
  const StyledLoginContainer = styled('div')(loginContainerStyles);

  const [_, setAuthedUser] = useContext(AuthContext);

  const inputs = [
    { name: 'email', label: 'Email' }, 
    { name: 'password', label: 'Password', type: 'password' }
  ];

  const handleLogin = async ({ email, password }: LoginDataProps) => {
    if (email?.length && password?.length) {
      const { data: { data: jwt } } = await login(email, password);
      if (jwt) {
        const decodedData = decodeJWT(jwt);
        if (decodedData) {
          const userData = JSON.parse(decodedData.user);
          setAuthedUser(userData);
          setUserInStorage(userData);
        }
      }
    }
  }

  return (
    <ContentSectionCentered>
      <StyledLoginContainer>
        <Form
          inputs={inputs}
          buttonText="Login"
          onSubmit={handleLogin}
        />
      </StyledLoginContainer>
    </ContentSectionCentered>
  )
};
