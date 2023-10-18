package pkg

import (
	"github.com/nickkhall/fullstack-todo/todo-rest/data"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos() (*[]types.Todo, error) {
	todos, err := data.GetTodos()

	if err != nil {
	  return nil, err
	}

	return todos, nil
}
