import type { FunctionComponent } from 'react'
import { useContext, useState } from 'react';

// Context
import AuthContext from '@/context/auth';

// Components
import ContentSectionCentered from '@/components/content/centered';
import Form from '@/components/form';

// Styles
import { styled } from '@mui/material/styles';
import loginContainerStyles from '@/styles/Login/container';

// Services
import { login } from 'api/auth';

type LoginProps = {

}

type LoginDataProps = {
  email: string
  password: string
}

export default function Login<FunctionComponent> ({ ...props }: LoginProps) {
  const StyledLoginContainer = styled('div')(loginContainerStyles);

  const inputs = [
    { name: 'email', label: 'Email' }, 
    { name: 'password', label: 'Password', type: 'password' }
  ];

  function handleLogin({ email, password }: LoginDataProps) {
    if (email?.length && password?.length) {
      const isAuthed = login(email, password);
      console.log({ isAuthed })
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
