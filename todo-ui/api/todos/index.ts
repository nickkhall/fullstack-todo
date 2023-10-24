import { makeRequest } from 'api/http';

// Hooks
import { useAuth } from '@/context/auth'; 

export const getTodos = async () => makeRequest({ path: '/todos' });

export const createTodoColumn = async (columnName: string) => {
  const response = await makeRequest({
    path: '/todos/columns',
    method: 'POST',
    payload: { name: columnName }
  });

  if (response?.data?.columns) {
    return response.data.columns;
  }
  
  // @TODO: Handle error notifications
  return [];
}

export const editTodo = async (updatedName: string) => {
  const response = await makeRequest({
    path: '/todos/:id',
    method: 'PUT',
    payload: { name: updatedName }
  });

  console.log({ editTodoResponse: response });
}
