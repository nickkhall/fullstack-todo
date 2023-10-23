import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// Components
import ContentSectionColumn from '@/components/content/sectionColumn';
import InlineLoader from '@/components/loader/inline';
import TodoColumn from './column';
import AddTodosHeader from './addHeader';

export default function Todos() {
  const [todoColumns, setTodoColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodoColumns = async () => {
    const { data: { data: { columns } } } = await getTodos();
    console.log({ columns });

    if (columns) {
      setTodoColumns(columns);
    }
  }

  useEffect(() => {
    getTodoColumns()

  }, [JSON.stringify(todoColumns)])

  if (isLoading) {
    return <InlineLoader /> 
  }

  const handleAddColumn = (name: string) => {
    console.log({ name });
  }

  const getTodoColumnName = (todoColumn: any) => {
    if (todoColumn) {
      const keys = Object.keys(todoColumn);
      console.log({ keys })
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

  return (
    <ContentSectionColumn>
      <AddTodosHeader onAddColumn={handleAddColumn} />
      {todoColumns?.length
        ? todoColumns.map(tc => <TodoColumn key={Object.keys(tc)?.[0] ? Object.keys(tc)[0] : 'N/A'} columnName={getTodoColumnName(tc)} todos={getTodoColumnData(tc)} />)
        : null
      }
    </ContentSectionColumn>
  )
}
