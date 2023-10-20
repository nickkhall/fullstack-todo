import { makeRequest } from 'api/http';

// Hooks
import { useAuth } from '@/context/auth'; 

export const getTodos = async () => makeRequest({ path: '/todos' });
