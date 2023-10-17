import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

// Components
import Loader from '@/components/loader';

// Utils
import { getUserFromStorage } from '@/utils/storage';

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }: any) {
  const router = useRouter();
  const [authedUser, setAuthedUser] = useState(null);
  const user = getUserFromStorage();

  useEffect(() => {
    setAuthedUser(user);

    if (!user) {
      router.push('/login', undefined, { shallow: true })
    } else {
      router.push('/', undefined, { shallow: true })
    }
  }, [])

  return (
    <AuthContext.Provider value={[authedUser, setAuthedUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

