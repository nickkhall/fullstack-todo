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

type JWTClaim struct {
  jwt.StandardClaims
  Issuer     string    `json:"iss"`
  Expires    time.Time `json:"exp"`
  Authorized bool      `json:"authorized"`
  User       string    `json:"user"`
}

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
  
  claims := &JWTClaim{
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
  c := config.GetConfig()
  requiredToken := c.JWTKey

  // We want to make sure the token is set, fail if not
  if requiredToken == "" {
    log.Fatal("Please set JWT_KEY environment variable")
  }

  return func(c *gin.Context) {
    token := c.Request.FormValue("Authorization")
    fmt.Println("Authorization token: ", token)

    if token == "" {
      respondWithError(c, 401, "API token required")
      return
    }

    if token != requiredToken {
      respondWithError(c, 401, "Invalid API token")
      return
    }

    c.Next()
  }
}

