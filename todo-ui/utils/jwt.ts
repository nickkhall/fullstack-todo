export const decodeJWT = (jwt: string) => {
  console.log({ jwt });
  if (!jwt) return null;

  const encodedData = atob(jwt?.split('.')?.[1]);

  if (!encodedData) return null;

  const data = JSON.parse(encodedData);

  if (!data) return null;

  console.log({ JWTData: data });

  return data;
}
