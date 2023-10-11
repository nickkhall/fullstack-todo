package todo

import (
	"encoding/json"
	"net/http"
)

type Todo struct {
  ID          string `json:"id"`
  Name        string `json:"name"`
  Description string `json:"description"`
  CreatedAt   int    `json:"createdAt"`
  Completed   bool   `json:"completed"`
}

func GetTodos(w http.ResponseWriter, r *http.Request) {
  todos := []Todo{}

  json.NewEncoder(w).Encode(todos)
}

func GetTodo(w http.ResponseWriter, r *http.Request) {
  todo := Todo{}

  json.NewEncoder(w).Encode(todo)
}

func CreateTodo(w http.ResponseWriter, r *http.Request) {
}

func UpdateTodo(w http.ResponseWriter, r *http.Request) {
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
}
