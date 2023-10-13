import { createContext } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }: any) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
