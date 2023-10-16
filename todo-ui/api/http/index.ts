import config from '@/config/config.json';

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
  const { restUrl, restPort } = config;
  const env = `${restUrl}:${restPort}`;
  const url = `${env}${path.split('')[0] !== '/' ? '/' : ''}${path}`;

  return fetch(url, {
    body: JSON.stringify(payload),
    method
  })
    .then(res => res.json()) 
    .then(data => ({ data }))
    .catch(err => Promise.reject(err))
}

