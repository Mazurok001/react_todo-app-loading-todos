import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1516;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createTodo = ({ userId, title, completed }: Todo) => {
  return client.post<Todo>('/todos', {
    // id,
    userId,
    title,
    completed,
  });
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodo = ({
  id,
  completed,
}: Pick<Todo, 'id' | 'completed'>) => {
  return client.patch<Todo>(`/todos/${id}`, completed);
};
