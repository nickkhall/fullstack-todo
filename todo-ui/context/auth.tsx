import { useState, createContext } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }: any) {
  const [authedUser, setAuthedUser] = useState(null);

  function authenticate(user: any) {
    setAuthedUser(user);
  }

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
