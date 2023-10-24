import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// MUI Components
import IconButton from '@mui/material/IconButton';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';

// Components
import ContentSectionColumn from '@/components/content/sectionColumn';
import ContentSectionRow from '@/components/content/sectionRow';
import Loader from '@/components/loader';
import TodoColumn from './column';

export default function Todos() {
  const [todoColumns, setTodoColumns] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedTodos, setPaginatedTodos] = useState<any[] | null>(null)

  const getTodoColumns = async () => {
    try {
      const { data: { columns = [] } } = await getTodos();
      setTodoColumns(columns);
      setPaginatedTodos(columns.filter((_: any, i: number) => i < getPaginatedNumberByWindowSize()))
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const getPaginatedNumberByWindowSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1250) {
      return 3;
    } else if (windowWidth > 1250 && windowWidth < 2000) {
      return 4;
    } else if (windowWidth > 2000 && windowWidth < 2650) {
      return 5;
    }

    // default 3
    return 3;
  }

  const handleAddColumn = (updatedColumns: any) => {
    setTodoColumns(updatedColumns);
    setPaginatedTodos(updatedColumns.filter((_: any, i: number) => i < getPaginatedNumberByWindowSize()))
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

  console.log({ innerWidth: window.innerWidth, paginationNumber: getPaginatedNumberByWindowSize(), paginatedTodos });

  useEffect(() => {
    if (isLoading) {
      getTodoColumns();
    }
  }, [isLoading, window.innerWidth])

  if (isLoading) {
    return <Loader text="Fetching Todos..." /> 
  }

  return (
    <ContentSectionRow>
      {paginatedTodos?.length
        ? paginatedTodos.map((tc, i) => (
            <TodoColumn
              key={Object.keys(tc)?.[0] ? Object.keys(tc)[0] : 'N/A'}
              columnName={getTodoColumnName(tc)}
              todos={getTodoColumnData(tc)}
            />
          )
        )
        : null
      }
      <IconButton
        sx={{
          background: 'transparent',
          height: '4rem',
          margin: '35px 10px 0px 10px'
        }}
      >
        <AddIcon sx={{ color: 'white', fontSize: '3rem' }} />
      </IconButton>
    </ContentSectionRow>
  )
}
