package handlers

import (
	"crypto/sha256"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	postgresdb "github.com/nickkhall/fullstack-todo/todo-rest/db"
)

type UserInfo struct {
  Email    string `json:"email"`
  Password string `json:"password"`
}

func Login(c *gin.Context) {
  var user UserInfo
  err := c.BindJSON(&user)
  if err != nil {
    log.Fatal(err)
  }

  // create hashed password
  h := sha256.New()
  h.Write([]byte(user.Password))

  // turn hash into string
  ph := fmt.Sprintf("%x", h.Sum(nil))

  // validate user with hashed password
  vu := postgresdb.ValidateUser(&user.Email, &ph)

  fmt.Printf("vu: %v\n", vu)
  c.Request.Header.Add("Access-Control-Allow-Origin", "*")
  c.Request.Header.Add("Content-Type", "application/json")

  if vu == false {
    c.JSON(http.StatusUnauthorized, gin.H{"success": false})
    return
  }

  c.JSON(http.StatusOK, gin.H{"success": true})
}

func Logout(w http.ResponseWriter, r *http.Request) {

}
