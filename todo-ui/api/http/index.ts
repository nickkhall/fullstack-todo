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
  const result = Promise.resolve(fetch(url, {
    body: JSON.stringify(payload),
    method
  }))
    .then(res => {
      console.log({ res })
      return res
    }) 
    .catch(err => console.error(err)); 

  console.log({ result })
}

