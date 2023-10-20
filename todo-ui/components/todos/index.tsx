import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// Components
import ContentSectionRow from '@/components/content/sectionRow';
import InlineLoader from '@/components/loader/inline';
import TodoColumn from './column';

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

  return (
    <ContentSectionRow>
      <TodoColumn columnName={'Today'} todos={todos} />
      <TodoColumn columnName={'Tomorrow'} todos={[]}/>
      <TodoColumn columnName={'Next Week'} todos={[]} />
    </ContentSectionRow>
  )
}
