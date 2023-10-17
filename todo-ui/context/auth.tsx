import {
  useState,
  useEffect,
  useCallback,
  createContext
} from 'react';
import { useRouter } from 'next/router';

// Components
import Loader from '@/components/loader';

// Utils
import { getUserFromStorage } from '@/utils/storage';

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }: any) {
  const router = useRouter();
  const [authedUser, setAuthedUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const user = getUserFromStorage();

  console.log({ authedUser, user });

  const handleLoad = useCallback((userData: any) => {
    console.log('handleLoad called', { user, authedUser });
    if (userData) {
      setAuthedUser(userData);
      setLoggedIn(true);

      router.push('/', undefined, { shallow: true })
      return;
    }

    if (!loggedIn || !userData) {
      setLoggedIn(false);
      router.push('/login', undefined, { shallow: true })
    }
  }, [])

  useEffect(() => {
    handleLoad(user);
  }, [JSON.stringify(user)])

  return (
    <AuthContext.Provider value={[authedUser, setAuthedUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

