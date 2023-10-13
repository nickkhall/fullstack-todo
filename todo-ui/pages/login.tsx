import type { FunctionComponent } from 'react'
import { useContext, useState } from 'react';

// Context
import AuthContext from '@/context/auth';

// Components
import ContentSection from '@/components/content';
import Form from '@/components/form';

import { login } from 'api/auth';

type LoginProps = {

}

export default function Login<FunctionComponent> ({ ...props }: LoginProps) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const inputs = [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password', type: 'password' }
  ];

  return (
    <ContentSection>
      <Form inputs={inputs} buttonText="Login" />
    </ContentSection>
  )
};
