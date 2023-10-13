import { makeRequest } from 'api/http';

export const login = (email: string, password: string) => {
  if (email && password) {
    const l = makeRequest({
      path: '/login',
      method: 'POST',
      payload: {
        email,
        password
      }
    })
  }

  return false;
} 
