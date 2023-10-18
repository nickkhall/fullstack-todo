import { LOCAL_STORAGE_USER_KEY } from '@/constants/storage';

export const getJWTFromStorage = () => {
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (jwt) {
      return jwt;
    }
  }

  return null;
}

export const setJWTInStorage = (jwt: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, jwt);
  }
}

export const removeJWTFromStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  }

  return null;
}
