package types

import (
	"time"

	"github.com/golang-jwt/jwt"
)

type JWTClaim struct {
  jwt.StandardClaims
  Issuer          string    `json:"iss"`
  Expires         time.Time `json:"exp"`
  Authorized      bool      `json:"authorized"`
  User		  User      `json:"user"`
}
