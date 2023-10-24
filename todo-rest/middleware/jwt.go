package middleware

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"time"

	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
	"github.com/nickkhall/fullstack-todo/todo-rest/utils"
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

  claims := &types.JWTClaim{
    Issuer: "issuer",
    Expires: time.Now().Add(1440 * time.Minute),
    Authorized: true,
    User: *u,
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
  return func(ctx *gin.Context) {
    path := ctx.FullPath()
    if (path == "/login") {
      ctx.Next()
      return
    }

    jwtClaim, err := utils.GetJWTClaim(ctx)
    if err != nil {
      respondWithError(ctx, 401, "JWT Token invalid.")
      return
    }

    expirationTime := time.Now().Add(-24 * time.Hour)

    if (jwtClaim.Expires.Before(expirationTime)) {
      respondWithError(ctx, 401, "JWT Token is expired.")
      return
    }

    ctx.Next()
  }
}

