export const getUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    const persistedAuthedUser = localStorage.getItem('authedUser');
    if (persistedAuthedUser) {
      return JSON.parse(persistedAuthedUser);
    }
  }

  return null;
}
