package config

import (
	"fmt"
	"log"
	"os"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

type Application struct {
  MongoConnStr string `mapstructure:"mongo_conn_str"`
}

type Config struct {
  App Application 
}

// Init reads in config file and ENV variables if set.
func InitConfig(cfgFile string) {
  if cfgFile != "" {
    // Use config file from the flag.
    viper.SetConfigFile(cfgFile)
    fmt.Println("Config File Passed In, Using Config:", viper.ConfigFileUsed())
  } else {
    fmt.Println("No Config File Passed In, Creating Config File...")
    // Find home directory.
    _, err := os.UserHomeDir()
    cobra.CheckErr(err)
    if err != nil {
      log.Fatal(err)
    }
    
    // Search config in home directory with name ".todo-rest" (without extension).
    viper.AddConfigPath(".config")
    viper.SetConfigName("config")
    viper.SetConfigType("yaml")
  }

  viper.AutomaticEnv() // read in environment variables that match
  if err := viper.ReadInConfig(); err != nil {
    log.Fatal(err)
  }

  var config Config
  err := viper.Unmarshal(&config)
  if err != nil {
    log.Fatal(err)
  }
}
