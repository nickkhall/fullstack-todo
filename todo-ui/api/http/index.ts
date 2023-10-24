import getConfig from 'next/config';

// Utils
import { getJWTFromStorage } from '@/utils/storage';

type HTTPRequest = {
  path: string
  payload?: {} | null
  params?: {} | null
  method?: string
}

export const makeRequest = async ({
  path,
  payload = null,
  params = null,
  method = 'GET'
}: HTTPRequest) => {

  const headers = {
    'Content-Type': 'application/json',
  }

  const jwt = getJWTFromStorage();
  if (jwt && path !== '/login') {   
    headers['Authorization'] = `Bearer ${jwt}`;
  }

  if (path !== '/login' && !jwt) {
    console.error(`Missing jwt token for request ${method} ${path}`);
    return;
  }

  const options = (method === 'GET' || method === 'DELETE')
    ? { method, headers }
    : {
      body: payload,
      method,
      headers
    };

  const { publicRuntimeConfig } = getConfig();
  const { restUrl, restPort } = publicRuntimeConfig;

  const env = `${restUrl}:${restPort}`;
  const url = `${env}${path.split('')[0] !== '/' ? '/' : ''}${path}`;

  const response = await fetch(url, { ...options })
    .then(res => res.json()) 
    .catch((err) => {
      console.error('ERROR', err);
      Promise.reject(err);
    });

  return response;
}

