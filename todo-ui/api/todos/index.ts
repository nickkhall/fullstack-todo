import { makeRequest } from 'api/http';

// Hooks
import { useAuth } from '@/context/auth'; 

export const getTodos = async () => makeRequest({ path: '/todos' });

export const createTodoColumn = (columnName: string) => {
  const response = makeRequest({
    path: '/todos/columns',
    method: 'POST',
    payload: { name: columnName }
  });

  if (response?.data?.columns) {
    return response.data.column;
  }
  
  // @TODO: Handle error notifications
  return [];
}
