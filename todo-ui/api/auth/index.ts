import { makeRequest } from 'api/http';

export const login = async (email: string, password: string) => {
  if (!email && !password) {
    throw new RangeError('Email or password empty or incorrect.');
  }

  return makeRequest({
    path: '/login',
    method: 'POST',
    payload: {
      email,
      password
    }
  })
} 
