package handlers

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/nickkhall/fullstack-todo/todo-rest/pkg"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
	"github.com/nickkhall/fullstack-todo/todo-rest/utils"
)

func GetTodos(ctx *gin.Context) {
  j := ctx.GetHeader("Authorization")
  splitJWT := strings.Split(j, "Bearer ")
  j = splitJWT[1]

  jwtClaim, err := utils.GetJWTClaim(ctx)
  if err != nil {
    log.Fatal(err)
  }

  u := jwtClaim.User
  
  if (u.Email == "") {
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
  }

  todos, err := pkg.GetTodos(&u.Email)
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

  jwtClaim, err := utils.GetJWTClaim(ctx)
  if err != nil {
    fmt.Println("ERROR - http/todo.go - CreateTodoColumn - Failed to get JWT Claim")
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
  }

  user := jwtClaim.User

  col, err := pkg.CreateTodoColumn(&c.ColumnName, &user.Email) 
  if err != nil {
    log.Print("POST /todos/column - ERROR: ", err)
    ctx.JSON(http.StatusInternalServerError, gin.H{"success": false})
    return
  }

  ctx.JSON(http.StatusOK, gin.H{"success": true, "data": col })
}
