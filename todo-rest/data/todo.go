package data

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/google/uuid"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetUserTodosByColumn(email string) (*types.TodoResponse, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }
  
  defer db.Close()
  
  // get user id
  userID, err := GetUserID(&email, db)
  if err != nil {
    return nil, err
  }

  // get todo groups with todos
  todoGroups, err := GetTodoGroups(&userID, db)
  if err != nil {
    return nil, err
  }
  
  tr := types.TodoResponse{
    Columns: *todoGroups,
  }
  
  return &tr, nil
}

func GetTodos(userID *string, groupID *string, db *sql.DB) (*[]types.ColumnsTodo, error) {
  c := config.GetConfig()

  // create todo groups to group the todos in by their id
  query := fmt.Sprintf("SELECT id, name, COALESCE(description, ''), created_at, completed, complete_by, COALESCE(completed_at, 0), group_id FROM %s WHERE user_id = '%s' AND group_id = '%s';", c.PSQLTodosTableName, *userID, *groupID)
  // grab all todos by the group id
  todoRows, err := db.Query(query)
  if err != nil {
    fmt.Println("ERROR IN -> GetTodos -> todoRows: Line 66")
    return nil, err
  }
   
  todos := make([]types.ColumnsTodo, 0)
  
  for todoRows.Next() {
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
    
    // create slice of todos
    todos = append(todos, t)
  }

  return &todos, nil
}

func CreateTodoColumn(name *string, email *string) (*types.TodoResponse, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  id := uuid.New()

  _, dbErr := db.Query("INSERT INTO todo_groups (id, name) VALUES($1, $2)", id, name)
  if err != nil {
    return nil, dbErr
  }

  todos, err := GetUserTodosByColumn(*email)
  if err != nil {
    return nil, err
  }

  return todos, nil
}
