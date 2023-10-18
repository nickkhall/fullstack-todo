package postgres

import (
	"log"

	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos() {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer Close(db)

  rows, err := db.Query("SELECT * FROM todos;")
  if err != nil {
    return nil, err
  }

  defer rows.Close()

  var array []types.Todo

  for rows.Next() {
    
  }
}
