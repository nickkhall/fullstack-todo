package data

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/google/uuid"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(email string) (*types.TodoResponse, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }
  
  defer db.Close()
  
  var userID string
  row := db.QueryRow("SELECT id FROM public.user WHERE email = $1;", email)
  err = row.Scan(&userID)
  
  if err != nil {
    return nil, err
  }
  
  todoGroups := make([]map[string][]types.ColumnsTodo, 0) // Initialize an empty slice
  
  todoGroupRows, err := db.Query("SELECT * FROM public.todo_groups WHERE user_id = $1", userID)
  if err != nil {
    return nil, err
  }
  
  defer todoGroupRows.Close()
  
  for todoGroupRows.Next() {
    var todoGroup types.TodoGroup
    err := todoGroupRows.Scan(&todoGroup.ID, &todoGroup.Name, &todoGroup.UserID)
    if err != nil {
      return nil, err
    }
    
    fmt.Println("todo group id: ", todoGroup.ID)
    
    todoRows, err := db.Query("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, COALESCE(completed_at, 0), group_id FROM public.todos WHERE user_id = $1 AND group_id = $2;", userID, todoGroup.ID)
    if err != nil {
      return nil, err
    }
    
    if err == sql.ErrNoRows {
      fmt.Println("NO ROWS FOR todos")
    }
    
    defer todoRows.Close()
    
    var todos []types.ColumnsTodo
    
    fmt.Println("about to iterate through todos")
    for todoRows.Next() {
      fmt.Println("iterating through todos")
      
      var todo types.Todo
      err := todoRows.Scan(&todo.ID, &todo.Name, &todo.Description, &todo.CreatedAt, &todo.Completed, &todo.CompleteBy, &todo.CompletedAt, &todo.GroupID)
      if err != nil {
        return nil, err
      }
      
      t := types.ColumnsTodo{
        ID:          todo.ID,
        Name:        todo.Name,
        Description: todo.Description,
        CreatedAt:   todo.CreatedAt,
        Completed:   todo.Completed,
        CompleteBy:  todo.CompleteBy,
        CompletedAt: todo.CompletedAt,
      }
      
      fmt.Println("todo: ", t)
      // create slice of todos
      todos = append(todos, t)
    }
    
    fmt.Println("todos: ", todos)
    
    // Create a new map for each todo group and append it to the slice
    todoCol := make(map[string][]types.ColumnsTodo)
    todoCol[todoGroup.Name] = todos
    todoGroups = append(todoGroups, todoCol)
  }
  
  tr := types.TodoResponse{
    Columns: todoGroups,
  }
  
  return &tr, nil
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
