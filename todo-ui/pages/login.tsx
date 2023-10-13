import type { FunctionComponent } from 'react'
import { useContext } from 'react';

// Context
import AuthContext from '@/context/auth';

// Components
import ContentSection from '@/components/content';

import { login } from 'api/auth';

type LoginProps = {

}

export default function Login<FunctionComponent> ({ ...props }: LoginProps) {
  const isAuthed = login('pissyboy@gmail.com', 'pissyboy')
  console.log({ isAuthed })
  return (
    <ContentSection>
      <p>login plz</p>
    </ContentSection>
  )
};
