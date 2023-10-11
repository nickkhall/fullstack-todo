package cmd

import (
	"fmt"

	"github.com/gin-gonic/gin"
	config "github.com/nickkhall/fullstack-todo/todo-rest/config"
	handlers "github.com/nickkhall/fullstack-todo/todo-rest/http"
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
	r.POST("/login", handlers.Login) 

	r.Run("localhost:3000")
}


