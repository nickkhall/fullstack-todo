package data

import (
	"database/sql"
	"fmt"

	"github.com/nickkhall/fullstack-todo/todo-rest/config"
)

func GetUserID (email *string, db *sql.DB) (string, error) {
  c := config.GetConfig()
  var userID string

  query := fmt.Sprintf("SELECT id FROM %s WHERE email = '%s'", string(c.PSQLUserTableName), *email)
  row := db.QueryRow(query)
  err := row.Scan(&userID)
  
  if err != nil {
    return "", err
  }

  return userID, nil
}
