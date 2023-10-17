import { makeRequest } from 'api/http';

export const login = async (email: string, password: string) => {
  if (email && password) {
    return makeRequest({
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
