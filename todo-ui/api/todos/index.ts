import { makeRequest } from 'api/http';

// Hooks
import { useAuth } from '@/context/auth'; 

export const getTodos = async () => {
  const todos = await makeRequest({ path: '/todos' });
  console.log({ todos });
}
