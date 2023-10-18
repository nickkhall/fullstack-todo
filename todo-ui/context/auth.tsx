import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext
} from 'react';
import { useRouter } from 'next/router';

// Components
import Loader from '@/components/loader';

// Utils
import { getJWTFromStorage } from '@/utils/storage';
import { decodeJWT } from '@/utils/jwt';

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }: any) {
  const router = useRouter();
  const [jwt, setJWT] = useState(null);
  const [authedUser, setAuthedUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const token = getJWTFromStorage();
  const user = decodeJWT(token);

  const handleLoad = useCallback((userData: any) => {
    if (token && userData) {
      setAuthedUser(userData);
      setLoggedIn(true);
      setJWT(token);

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

  if (router.pathname !== '/login' && authedUser === null) {
    return null
  }

  return (
    <AuthContext.Provider value={[authedUser, setAuthedUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

