package utils

import (
	"errors"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func GetJWTClaim(ctx *gin.Context) (*types.JWTClaim, error) {
  cfg := config.GetConfig()
  requiredToken := cfg.JWTKey

  // We want to make sure the token is set, fail if not
  if requiredToken == "" {
    log.Fatal("utils.GetJWTClaim - Please set JWT_KEY environment variable")
  }

  jwtToken := ctx.GetHeader("Authorization")[7:]

  if jwtToken == "" {
    return nil, errors.New("JWT Token is required.")
  }

  jwtClaim := types.JWTClaim{}
  _, err := jwt.ParseWithClaims(jwtToken, &jwtClaim, func(token *jwt.Token) (interface{}, error) {
    return []byte(cfg.JWTKey), nil
  })

  if err != nil {
    return nil, err
  }
  
  return &jwtClaim, nil
}
