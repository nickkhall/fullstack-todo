package handlers

import (
	"crypto/sha256"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	postgresdb "github.com/nickkhall/fullstack-todo/todo-rest/db"
	"github.com/nickkhall/fullstack-todo/todo-rest/middleware"
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
  fmt.Println("auth.Login() err: ", err)

  if err != nil {
    ctx.JSON(http.StatusUnauthorized, gin.H{"success": false})
    return
  }

  ctx.JSON(http.StatusOK, gin.H{"success": true, "data": jwt})
}

func Logout(ctx *gin.Context) {
  var j JWTRequestBody
  if err := ctx.BindJSON(&j); err != nil {
    log.Fatal(err)
  }

  token, err := jwt.ParseWithClaims(j.JWT, &middleware.JWTClaim{}, func(token *jwt.Token) (interface{}, error) {
    c := config.GetConfig()
    return []byte(c.JWTKey), nil
  })

  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("token: ", token)
}
