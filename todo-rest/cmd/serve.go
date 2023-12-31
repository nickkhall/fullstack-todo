package cmd

import (
	"fmt"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	config "github.com/nickkhall/fullstack-todo/todo-rest/config"
	handlers "github.com/nickkhall/fullstack-todo/todo-rest/http"
	"github.com/nickkhall/fullstack-todo/todo-rest/middleware"
	"github.com/spf13/cobra"
)

var cfgFile string

// serveCmd represents the serve command
var serveCmd = &cobra.Command{
  Use:   "serve",
  Short: "",
  Long: ``,
  Run: func(cmd *cobra.Command, args []string) {
    fmt.Println("serve called")
  },
}

func init() {
  rootCmd.AddCommand(serveCmd)
  
  // setup .env config file
  config.SetEnvConfig(cfgFile)
  
  
  r := gin.Default()
  r.Use(cors.New(cors.Config{
    AllowOrigins:     []string{"http://localhost:3000"},
    AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
    AllowHeaders:     []string{"Content-Type", "Content-Length", "Accept-Encoding", "Authorization", "Cache-Control"},
    ExposeHeaders:    []string{"Content-Length"},
    AllowCredentials: true,
    MaxAge:           24 * time.Hour,
  }))

  r.Use(middleware.TokenAuthMiddleware())
  
  // handlers
  // Auth
  r.POST("/login", handlers.Login) 

  // Todos
  r.GET("/todos", handlers.GetTodos)
  r.POST("/todos/columns", handlers.CreateTodoColumn)
  
  // run http server
  r.Run("localhost:5000")
}


