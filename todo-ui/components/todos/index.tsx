import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// Components
import ContentSectionRow from '@/components/content/sectionRow';
import InlineLoader from '@/components/loader/inline';
import TodoColumn from './column';

export default function Todos() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // @TODO: Turn into hook
    // setIsLoading(true);

    getTodos();

    // setIsLoading(false);

  }, [JSON.stringify(todos)])

  if (isLoading) {
    return <InlineLoader /> 
  }

  return (
    <ContentSectionRow>
      <TodoColumn columnName={'Today'} />
      <TodoColumn columnName={'Tomorrow'} />
      <TodoColumn columnName={'Next Week'} />
    </ContentSectionRow>
  )
}
