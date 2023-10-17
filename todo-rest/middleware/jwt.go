package middleware

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	jwt "github.com/golang-jwt/jwt"
	"github.com/nickkhall/fullstack-todo/todo-rest/config"
	"github.com/nickkhall/fullstack-todo/todo-rest/types"
)

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
  
  claims := &jwt.MapClaims{
    "iss": "issuer",
    "exp": time.Now().Add(1440 * time.Minute),
    "authorized": true,
    "user": string(uJSON),
  }

  // create jwt token
  token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
  
  fmt.Println("c.JWTKey", c.JWTKey)
  fmt.Println("[]byte(key)", key)
  tokenString, err := token.SignedString(key)
  if err != nil {
    return "", err
  }
  
  return tokenString, nil
}

func VerifyJWT(endpointHandler func(writer http.ResponseWriter, request *http.Request)) http.HandlerFunc {
  return http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
    if request.Header["Token"] != nil {
      token, err := jwt.Parse(request.Header["Token"][0], func(token *jwt.Token) (interface{}, error) {
        _, ok := token.Method.(*jwt.SigningMethodECDSA)
        if !ok {
          writer.WriteHeader(http.StatusUnauthorized)
          _, err := writer.Write([]byte("You're Unauthorized!"))
          if err != nil {
             return nil, err
          }
        }
        return "", nil
      })

      if err != nil {
	writer.WriteHeader(http.StatusUnauthorized)
        _, err2 := writer.Write([]byte("You're Unauthorized due to error parsing the JWT"))
        if err2 != nil {
          return
        }
      }

      if token.Valid {
	endpointHandler(writer, request)
      } else {
	writer.WriteHeader(http.StatusUnauthorized)
	_, err := writer.Write([]byte("You are unauthorized due to an invalid token."))
	if err != nil {
	  return
	}
      }
    } else {
      writer.WriteHeader(http.StatusUnauthorized)
      _, err := writer.Write([]byte("You are unauthorized due to having NO token."))
      if err != nil {
        return
      }
    }
  })
}
