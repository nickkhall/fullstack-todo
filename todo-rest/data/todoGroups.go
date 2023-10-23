package data

import (
	"database/sql"
	"fmt"

	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodoGroups(userID *string, db *sql.DB) (*[]map[string][]types.ColumnsTodo, error) {
  c := config.GetConfig()

  // create todo groups to group the todos in by their id
  query := fmt.Sprintf("SELECT * FROM %s WHERE user_id = '%s'", string(c.PSQLTodoGroupsTableName), *userID)
  todoGroupRows, err := db.Query(query)
  if err != nil {
    fmt.Println("GetTodoGroups - todoGroupRows")
    return nil, err
  }

  // initialize todo groups slice
  todoGroups := make([]map[string][]types.ColumnsTodo, 0)

  for todoGroupRows.Next() {
    var todoGroup types.TodoGroup
    err := todoGroupRows.Scan(&todoGroup.ID, &todoGroup.Name, &todoGroup.UserID)
    if err != nil {
      return nil, err
    }

    todos, err := GetTodos(userID, &todoGroup.ID, db)
    if err != nil {
      return nil, err
    }
    
    // Create a new map for each todo group and append it to the slice
    todoCol := make(map[string][]types.ColumnsTodo)
    todoCol[todoGroup.Name] = *todos
    todoGroups = append(todoGroups, todoCol)
  }

  return &todoGroups, nil
}

