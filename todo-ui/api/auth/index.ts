import { makeRequest } from 'api/http';

export const login = async (email: string, password: string) => {
  if (email && password) {
    const res = await makeRequest({
      path: '/login',
      method: 'POST',
      payload: {
        email,
        password
      }
    })

    const { data } = res;
    console.log({ data });
    return data;
  }

  return false;
} 
