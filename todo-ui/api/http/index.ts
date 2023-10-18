import getConfig from 'next/config';

// Utils
import { getJWTFromStorage } from '@/utils/storage';

type HTTPRequest = {
  path: string
  payload?: {} | null
  params?: {} | null
  method?: string
}

export const makeRequest = ({
  path,
  payload = null,
  params = null,
  method = 'GET'
}: HTTPRequest) => {
  const jwt = getJWTFromStorage();
  if (!jwt) {
    console.error(`Missing jwt token for request ${method} ${path}`);
    return;
  }

  const { publicRuntimeConfig } = getConfig();
  const { restUrl, restPort } = publicRuntimeConfig;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }

  const env = `${restUrl}:${restPort}`;
  const url = `${env}${path.split('')[0] !== '/' ? '/' : ''}${path}`;

  const options = (method === 'GET' || method === 'DELETE')
    ? { method, headers }
    : {
      body: JSON.stringify(payload),
      method,
      headers
    }

  return fetch(url, { ...options })
    .then(res => res.json()) 
    .then(data => ({ data }))
    .catch(err => Promise.reject(err))
}

