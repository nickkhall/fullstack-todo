package types

import "time"

type User struct {
  Username  string    `json:"username"`
  Email     string    `json:"email"`
  LastLogin time.Time `json:"last_login"`
}
