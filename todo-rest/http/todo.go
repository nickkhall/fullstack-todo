package handlers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/nickkhall/fullstack-todo/todo-rest/pkg"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(ctx *gin.Context) {
  todos, err := pkg.GetTodos()
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
