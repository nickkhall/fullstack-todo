package config

import (
	"log"

	"github.com/spf13/viper"
)

var EnvConfig *config

type config struct {
  PSQLHost	string `mapstructure:"PSQL_HOST"`
  PSQLPort 	int    `mapstructure:"PSLQ_PORT"`
  PSQLUser 	string `mapstructure:"PSQL_USER"`
  PSQLPassword	string `mapstructure:"PSQL_PASSWORD"`
  PSQLDBName    string `mapstructure:"PSQL_DB_NAME"`
}

func SetEnvConfig(cfgFile string) {
  EnvConfig = InitEnvConfig(cfgFile)
}

// Init reads in config file and ENV variables if set.
func InitEnvConfig(cfgFile string) (c *config) {
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
  if err := viper.Unmarshal(&c); err != nil {
    log.Fatal(err)
  }

  return
}

func GetConfig() *config {
  return EnvConfig
}
