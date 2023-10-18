package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(w http.ResponseWriter, r *http.Request) {
  todos := []types.Todo{}

  json.NewEncoder(w).Encode(todos)
}

func GetTodo(w http.ResponseWriter, r *http.Request) {
  todo := types.Todo{}

  json.NewEncoder(w).Encode(todo)
}

func CreateTodo(w http.ResponseWriter, r *http.Request) {
}

func UpdateTodo(w http.ResponseWriter, r *http.Request) {
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
}
