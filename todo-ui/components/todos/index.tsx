import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// Components
import ContentSectionColumn from '@/components/content/sectionColumn';
import Loader from '@/components/loader';
import TodoColumn from './column';
import TodosHeader from './header';

export default function Todos() {
  const [todoColumns, setTodoColumns] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getTodoColumns = async () => {
    try {
      const { data: { columns = [] } } = await getTodos();
      setTodoColumns(columns);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const handleAddColumn = (name: string) => {
    console.log({ name });
  }

  const getTodoColumnName = (todoColumn: any) => {
    if (todoColumn) {
      const keys = Object.keys(todoColumn);
      if (keys?.[0]) {
        return keys[0]
      }
    }

    return 'N/A';
  }

  const getTodoColumnData = (todoColumn: any) => {
    if (!todoColumn) return []
    const todos = Object.values(todoColumn);
    if (todos?.[0]) {
      return todos[0];
    }

    return [];
  }

  useEffect(() => {
    console.log({ isLoading });
    if (isLoading) {
      getTodoColumns();
    }
  }, [isLoading])

  if (isLoading) {
    return <Loader text="Fetching Todos..." /> 
  }

  return (
    <ContentSectionColumn>
      <TodosHeader onAddColumn={handleAddColumn} />
      {todoColumns?.length
        ? todoColumns.map(tc => <TodoColumn key={Object.keys(tc)?.[0] ? Object.keys(tc)[0] : 'N/A'} columnName={getTodoColumnName(tc)} todos={getTodoColumnData(tc)} />)
        : null
      }
    </ContentSectionColumn>
  )
}
