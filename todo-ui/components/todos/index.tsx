import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// Components
import ContentSectionColumn from '@/components/content/sectionColumn';
import InlineLoader from '@/components/loader/inline';
import TodoColumn from './column';
import AddTodosHeader from './addHeader';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const { data: { data: t } } = await getTodos();

    if (todos) {
      setTodos(t);
    }
  }

  useEffect(() => {
    getData()

  }, [JSON.stringify(todos)])

  if (isLoading) {
    return <InlineLoader /> 
  }

  const handleAddColumn = (name: string) => {
    console.log({ name });
  }

  return (
    <ContentSectionColumn>
      <AddTodosHeader onAddColumn={handleAddColumn} />
      <TodoColumn columnName={'Today'} todos={todos} />
    </ContentSectionColumn>
  )
}
