import type { FunctionComponent } from 'react'
import { useContext, useState } from 'react';

// Context
import { AuthContext } from '@/context/auth';

// Components
import ContentSectionCentered from '@/components/content/centered';
import Form from '@/components/form';
import Loader from '@/components/loader';

// Styles
import { styled } from '@mui/material/styles';
import loginContainerStyles from '@/styles/Login/container';

// Services
import { login } from 'api/auth';

// Utils
import { decodeJWT } from '@/utils/jwt';
import { setJWTInStorage } from '@/utils/storage';

type LoginProps = {

}

type LoginDataProps = {
  email: string
  password: string
}

const StyledLoginContainer = styled('div')(loginContainerStyles);

export default function Login<FunctionComponent> () {
  const [isLoading, setIsLoading] = useState(false);
  const [_, setAuthedUser] = useContext(AuthContext);

  const inputs = [
    { name: 'email', label: 'Email' }, 
    { name: 'password', label: 'Password', type: 'password' }
  ];

  const handleLogin = async ({ email, password }: LoginDataProps) => {
    if (!email?.length || !password?.length) return;

    setIsLoading(true);

    const { data: jwt } = await login(email, password);
    if (!jwt) {
      setIsLoading(false);
      return;
    }

    const decodedData = decodeJWT(jwt);
    if (!decodedData) {
      setIsLoading(false);
      return;
    }

    const userData = JSON.parse(decodedData.user);
    setAuthedUser(userData);
    setJWTInStorage(jwt);
  }

  if (isLoading) {
    return <Loader />;
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
