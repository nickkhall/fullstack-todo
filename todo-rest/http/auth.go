package handlers

import (
	"crypto/sha256"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	postgresdb "github.com/nickkhall/fullstack-todo/todo-rest/data"
)

type UserInfo struct {
  Email    string `json:"email"`
  Password string `json:"password"`
}

type JWTRequestBody struct {
  JWT string  `json:"jwt"`
}

func Login(ctx *gin.Context) {
  var user UserInfo
  err := ctx.BindJSON(&user)
  if err != nil {
    log.Fatal(err)
  }

  // create hashed password
  h := sha256.New()
  h.Write([]byte(user.Password))

  // turn hash into string
  ph := fmt.Sprintf("%x", h.Sum(nil))

  // validate user with hashed password
  jwt, err := postgresdb.Login(&user.Email, &ph)

  if err != nil {
    ctx.JSON(http.StatusUnauthorized, gin.H{"success": false})
    return
  }

  ctx.JSON(http.StatusOK, gin.H{"success": true, "data": jwt})
}

