package pkg

import (
	"github.com/nickkhall/fullstack-todo/todo-rest/data"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(email string) (*[]types.Todo, error) {
	todos, err := data.GetTodos(email)

	if err != nil {
	  return nil, err
	}

	return todos, nil
}

func CreateTodoColumn(name string) (string, error) {
	col, err := data.CreateTodoColumn(name)
	if err != nil {
		return "", err
	}

	return col, nil
}
