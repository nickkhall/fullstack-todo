package postgresdb

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	// handlers "github.com/nickkhall/fullstack-todo/todo-rest/http"
)

func Connect() (db *sql.DB, err error) {
  c := config.GetConfig()

  psqlInfo := fmt.Sprintf("host=%s port=5432 user=%s password=%s dbname=%s sslmode=disable", c.PSQLHost, c.PSQLUser, c.PSQLPassword, c.PSQLDBName)

  db, dbErr := sql.Open("postgres", psqlInfo)
  if dbErr != nil {
    return
  }

  return db, dbErr 
}

func Close(db *sql.DB) {
  db.Close()
}

func ValidateUser(email *string, h *string) (bool, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer Close(db)

  var e string
  row := db.QueryRow("SELECT email FROM public.user WHERE password = $1", *h)
  err = row.Scan(&e);

  if err != nil {
    log.Fatal(err)
    return false, err
  }

  // if user exists, return true 
  if string(e) == *email {
    return true, nil
  }

  // if user does not exist, return false
  return false, nil
}
 

