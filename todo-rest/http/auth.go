package handlers

import (
	"crypto/sha256"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	postgresdb "github.com/nickkhall/fullstack-todo/todo-rest/db"
)

type UserInfo struct {
  Email    string `json:"email`
  Password string `json:"password"`
}

func Login(c *gin.Context) {
  var user UserInfo
  err := c.BindJSON(&user)
  if err != nil {
    return 
  }

  fmt.Println("user", user)

  h := sha256.New()
  h.Write([]byte(user.Password))
  postgresdb.ValidateUser(&h)
}

func Logout(w http.ResponseWriter, r *http.Request) {

}
