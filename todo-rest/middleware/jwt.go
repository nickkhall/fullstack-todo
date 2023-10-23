package middleware

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

func DecodeJWT(t *jwt.Token) {

}

func GenerateJWT(u *types.User) (string, error) {
  c := config.GetConfig()
  var buf bytes.Buffer
  encoder := base64.NewEncoder(base64.StdEncoding, &buf)
  err := json.NewEncoder(encoder).Encode(*u)
  if err != nil {
    return "", err
  }
  
  encoder.Close()
  
  key := []byte(c.JWTKey)
  uJSON, err := json.Marshal(u)
  if err != nil {
    return "", err
  }
  
  claims := &types.JWTClaim{
    Issuer: "issuer",
    Expires: time.Now().Add(1440 * time.Minute),
    Authorized: true,
    User: string(uJSON),
  }

  // create jwt token
  token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
  
  tokenString, err := token.SignedString(key)
  if err != nil {
    return "", err
  }
  
  return tokenString, nil
}

func respondWithError(c *gin.Context, code int, message interface{}) {
  c.AbortWithStatusJSON(code, gin.H{"error": message})
}

func TokenAuthMiddleware() gin.HandlerFunc {
  return func(c *gin.Context) {
    path := c.FullPath()
    if (path == "/login") {
      c.Next()
      return
    }

    cfg := config.GetConfig()
    requiredToken := cfg.JWTKey

    // We want to make sure the token is set, fail if not
    if requiredToken == "" {
      log.Fatal("Please set JWT_KEY environment variable")
    }

    jwtToken := c.GetHeader("Authorization")[7:]
    jwtClaim := types.JWTClaim{}
    _, err := jwt.ParseWithClaims(jwtToken, &jwtClaim, func(token *jwt.Token) (interface{}, error) {
      return []byte(cfg.JWTKey), nil
    })

    if err != nil {
      respondWithError(c, 401, "JWT Token invalid.")
      return
    }

    if jwtToken == "" {
      respondWithError(c, 401, "JWT Token required.")
      return
    }

    expirationTime := time.Now().Add(-24 * time.Hour)

    fmt.Println("checking expiration of jwt")
    fmt.Println("jwtClaim.Expires:", jwtClaim.Expires)
    fmt.Println("expirationTime:", expirationTime)
    if (jwtClaim.Expires.Before(expirationTime)) {
      fmt.Println("JWT IS EXPIRED")
      respondWithError(c, 401, "JWT Token is expired.")
      return
    }

    c.Next()
  }
}

