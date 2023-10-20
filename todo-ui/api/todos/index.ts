import { makeRequest } from 'api/http';

// Hooks
import { useAuth } from '@/context/auth'; 

export const getTodos = async () => makeRequest({ path: '/todos' });

export const createTodoColumn = async (columnName: string) => 
  makeRequest({
    path: '/todos/column',
    method: 'POST',
    payload: { name: columnName }
  })
