package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/pkg"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)
func extractClaims(tokenStr string) (jwt.MapClaims, error) {
  c := config.GetConfig()

  token, err := jwt.ParseWithClaims(tokenStr, &types.JWTClaim{}, func(token *jwt.Token) (interface{}, error) {
     // check token signing method etc
     return []byte(c.JWTKey), nil
  })

  if err != nil {
    return nil, err 
  }

  fmt.Println("token: ", token)

  if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
    return claims, nil 
  } 
  return nil, err 
}

func GetTodos(ctx *gin.Context) {
  j := ctx.GetHeader("Authorization")
  splitJWT := strings.Split(j, "Bearer ")
  j = splitJWT[1]
  c := config.GetConfig()

  token, err := jwt.ParseWithClaims(j, &types.JWTClaim{}, func(token *jwt.Token) (interface{}, error) {
    if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
      return nil, errors.New("Unexpected signing method")
    }

    return []byte(c.JWTKey), nil
  })

  if err != nil {
    log.Fatal(err)
  }

  var u types.User
  if claims, ok := token.Claims.(*types.JWTClaim); ok && token.Valid {
    json.Unmarshal([]byte(claims.User), &u)
    if err != nil {
      log.Fatal(err)
    }
  }

  if (u.Email == "") {
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
  }


  todos, err := pkg.GetTodos(u.Email)
  if err != nil {
    log.Print("GET /todos - ERROR: ", err)
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
    return
  }

  ctx.JSON(http.StatusOK, gin.H{"success": true, "data": todos})
}

func GetTodo() {
}

func CreateTodo() {
}

func UpdateTodo() {
}

func DeleteTodo() {
}

func CreateTodoColumn(ctx *gin.Context) {
  var c types.Column
  err := ctx.BindJSON(&c)

  name, err := pkg.CreateTodoColumn(c.ColumnName) 
  if err != nil {
    log.Print("POST /todos/column - ERROR: ", err)
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
  }

  ctx.JSON(http.StatusOK, gin.H{"success": true, "data": name })
}
