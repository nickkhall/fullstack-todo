package data

import (
	"log"

	"github.com/google/uuid"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(email string) (*[]types.TodoResponse, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer db.Close()

  var id string
  row := db.QueryRow("SELECT id FROM public.user WHERE email = $1;", email)
  err = row.Scan(&id)

  if err != nil {
    return nil, err
  }

  rows, err := db.Query("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, COALESCE(completed_at, 0), group_id FROM public.todos WHERE user_id = $1;", id)
  if err != nil {
    return nil, err
  }

  defer rows.Close()

  var todos []types.ColumnsTodo

  for rows.Next() {
    var todo types.Todo
    err := rows.Scan(&todo.ID, &todo.Name, &todo.Description, &todo.CreatedAt, &todo.Completed, &todo.CompleteBy, &todo.CompletedAt, &todo.GroupID)
    if err != nil {
      return nil, err
    }

    var columnName string
    row := db.QueryRow("SELECT name FROM public.todo_groups WHERE id = $1;", todo.GroupID)
    err = row.Scan(&columnName)

    if err != nil {
      return nil, err
    }

    t := types.ColumnsTodo{
      ID: todo.ID,
      Name: todo.Name,
      Description: todo.Description,
      CreatedAt: todo.CreatedAt,
      Completed: todo.Completed,
      CompleteBy: todo.CompleteBy,
      CompletedAt: todo.CompletedAt,
    }

    todos = append(todos, t) 
    type todoMap map[string][]types.ColumnsTodo
    var todoSlice []map[string][]types.ColumnsTodo

    var tm todoMap

    if tm[columnName] == nil {
      tm[columnName] = todos
    }

    todoSlice = append(todoSlice, tm)

    tr := types.TodoResponse{
      Columns: todoSlice,
    }

    return &tr, nil
  }

  err = rows.Err()
  if err != nil {
    return nil, err
  }

  return &todos, nil
}

func CreateTodoColumn(name string) (string, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer db.Close()

  id := uuid.New()

  _, dbErr := db.Query("INSERT INTO todo_groups (id, name) VALUES($1, $2)", id, name)
  if err != nil {
    return "", dbErr
  }

  return name, nil
}
