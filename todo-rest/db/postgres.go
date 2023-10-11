package postgresdb

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	todo "github.com/nickkhall/fullstack-todo/todo-rest/http"
)

func Connect() (db *sql.DB, err error) {
  c := config.GetConfig()

  psqlInfo := fmt.Sprintf("host=%s port=5432 user=%s password=%s dbname=%s sslmode=disable", c.PSQLHost, c.PSQLUser, c.PSQLPassword, c.PSQLDBName)

  db, dbErr := sql.Open("postgres", psqlInfo)
  if dbErr != nil {
    return
  }

  err = db.Ping()
  if err != nil {
    return
  }

  fmt.Printf("Successfull connected to postgres table %s ", c.PSQLDBName)
  return
}

func Close(db *sql.DB) {
  db.Close()
}

func Insert(t *todo.Todo) (err error) {
  db, err := Connect()

  defer Close(db)

  fmt.Println("todo: ", t)
  fmt.Println("db: ", db)

  return
}
 

