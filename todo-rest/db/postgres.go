package postgresdb

import (
	"fmt"

	"github.com/nickkhall/fullstack-todo/todo-rest/config"
)

type Credentials struct {
  Host	    string
  Port      string
  User      string
  Password  string
  DBName    string
}

func GetServerCredentials() {
  c := config.GetConfig()
  fmt.Printf("Host:%v\n", c.Host)
  fmt.Printf("Port:%v\n", c.Port)
}
