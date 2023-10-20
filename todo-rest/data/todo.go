package data

import (
	"fmt"
	"log"

	"github.com/google/uuid"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(email string) (*[]types.Todo, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer db.Close()

  var id string
  fmt.Println("email: ", email)
  row := db.QueryRow("SELECT id FROM public.user WHERE email = $1;", email)
  err = row.Scan(&id)

  if err != nil {
    return nil, err
  }

  rows, err := db.Query("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, user_id, COALESCE(completed_at, 0) FROM public.todos WHERE user_id = $1;", id)
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
