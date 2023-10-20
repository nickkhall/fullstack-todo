package data

import (
	"log"

	"github.com/google/uuid"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos() (*[]types.Todo, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer db.Close()

  rows, err := db.Query("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, user_id, COALESCE(completed_at, 0) FROM todos;")
  if err != nil {
    return nil, err
  }

  defer rows.Close()

  var todos []types.Todo

  for rows.Next() {
    var todo types.Todo
    err := rows.Scan(&todo.ID, &todo.Name, &todo.Description, &todo.CreatedAt, &todo.Completed, &todo.CompleteBy, &todo.UserID, &todo.CompletedAt)
    if err != nil {
      return nil, err
    }

    todos = append(todos, todo) 
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
