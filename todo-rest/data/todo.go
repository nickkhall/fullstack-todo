package data

import (
	"log"

	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos() (*[]types.Todo, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer db.Close()

  rows, err := db.Query("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, user_id FROM todos;")
  if err != nil {
    return nil, err
  }

  defer rows.Close()

  var todos []types.Todo

  for rows.Next() {
    var todo types.Todo
    err := rows.Scan(&todo.ID, &todo.Name, &todo.Description, &todo.CreatedAt, &todo.Completed, &todo.CompleteBy, &todo.UserID)
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
