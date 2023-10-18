export const decodeJWT = (jwt: string | null) => {
  if (!jwt) return null;

  const encodedData = atob(jwt?.split('.')?.[1]);
  if (!encodedData) return null;

  const data = JSON.parse(encodedData);
  if (!data) return null;

  return data;
}
