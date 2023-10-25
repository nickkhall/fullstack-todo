import { useState, useEffect } from 'react';

// API
import { getTodos } from '@/api/todos';

// MUI Components
import IconButton from '@mui/material/IconButton';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';

// Components
import ContentRow from '@/components/content/row';
import Loader from '@/components/loader';
import TodoColumn from './column';

export default function Todos() {
  const [todoColumns, setTodoColumns] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedTodos, setPaginatedTodos] = useState<any[] | null>(null)
  const [isCreatingColumn, setIsCreatingColumn] = useState<boolean>(false);

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
      return 2;
    } else if (windowWidth > 1250 && windowWidth < 2000) {
      return 3;
    } else if (windowWidth > 2000 && windowWidth < 2650) {
      return 4;
    }

    // default 3
    return 3;
  }

  const handleCreateNewColumn = () => {
    setPaginatedTodos([...paginatedTodos, { name: '', isNew: true }]) 
    setIsCreatingColumn(true);
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
    if (isLoading) {
      getTodoColumns();
    }
  }, [isLoading])

  if (isLoading) {
    return <Loader text="Fetching Todos..." /> 
  }

  return (
    <ContentRow>
      {paginatedTodos?.length
        ? paginatedTodos.map((tc, i, arr) => (
            <TodoColumn
              isNewlyCreatedColumn={(i === (arr.length - 1))}
              isCreatingColumn={isCreatingColumn}
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
          margin: '35px 10px 0px 5px'
        }}
        onClick={handleCreateNewColumn}
      >
        <AddIcon sx={{ color: 'white', fontSize: '3rem' }} />
      </IconButton>
    </ContentRow>
  )
}
