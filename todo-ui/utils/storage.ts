import { LOCAL_STORAGE_USER_KEY } from '@/constants/storage';

export const getUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    console.log({ LOCAL_STORAGE_USER_KEY });
    const persistedAuthedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (persistedAuthedUser) {
      return JSON.parse(persistedAuthedUser);
    }
  }

  return null;
}

export const setUserInStorage = (userData: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
  }
}

export const removeUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  }

  return null;
}
