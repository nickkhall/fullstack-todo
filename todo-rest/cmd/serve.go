package cmd

import (
	"fmt"

	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	postgresdb "github.com/nickkhall/fullstack-todo/todo-rest/db"
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

	postgresdb.Connect()
}


