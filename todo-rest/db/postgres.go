package postgresdb

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	types "github.com/nickkhall/fullstack-todo/todo-rest/types"
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

func Login(e *string, h *string) (*types.User, error) {
  // connect to postgres db
  db, err := Connect()
  if err != nil {
    log.Fatal(err)
  }

  defer Close(db)

  var u types.User
  row := db.QueryRow("SELECT username, email, last_login FROM public.user WHERE email = $1 AND password = $2", *e, *h)
  err = row.Scan(&u.Username, &u.Email, &u.LastLogin);

  // user does not exist
  if err == sql.ErrNoRows || err != nil {
    return nil, err
  }

  fmt.Println("user", u)

  // the user exists, return true 
  if string(u.Email) == *e {
    return &u, nil
  }

  return nil, nil
}
 

