package config

import (
	"log"

	"github.com/spf13/viper"
)

var EnvConfig *Config

type Config struct {
  Host	    string `mapstructure:"HOST"`
  Port 	    string `mapstructure:"PORT"`
  User 	    string `mapstructure:"USER"`
  Password  string `mapstructure:"PASSWORD"`
  DBName    string `mapstructure:"DBNAME"`
}

func SetEnvConfig(cfgFile string) {
  EnvConfig = InitEnvConfig(cfgFile)
}

// Init reads in config file and ENV variables if set.
func InitEnvConfig(cfgFile string) (config *Config) {
  if cfgFile != "" {
    // Use config file from the flag.
    viper.SetConfigFile(cfgFile)
  } else {
    viper.AddConfigPath(".")
    viper.SetConfigFile(".env")
  }

  // read in environment variables that match
  viper.AutomaticEnv()

  // read in config
  if err := viper.ReadInConfig(); err != nil {
    log.Fatal("Error reading env file", err)
  }

  // unmarshal config
  if err := viper.Unmarshal(&config); err != nil {
    log.Fatal(err)
  }

  return
}

func GetConfig() *Config {
  return EnvConfig
}
