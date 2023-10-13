import { createContext } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }: any) {
   return (
     <UserContext.Provider>
       {children}
     </UserContext.Provider>
   );
}

