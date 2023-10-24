package pkg

import (
	"github.com/nickkhall/fullstack-todo/todo-rest/data"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetTodos(email *string) (*types.TodoResponse, error) {
	todos, err := data.GetUserTodosByColumn(*email)

	if err != nil {
	  return nil, err
	}

	return todos, nil
}

func CreateTodoColumn(name *string, email *string) (*types.TodoResponse, error) {
	col, err := data.CreateTodoColumn(name, email)
	if err != nil {
		return nil, err
	}

	return col, nil
}
