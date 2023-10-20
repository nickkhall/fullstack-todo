package types

type Todo struct {
  ID          string `json:"id"`
  Name        string `json:"name"`
  Description string `json:"description"`
  CreatedAt   int    `json:"createdAt"`
  Completed   bool   `json:"completed"`
  CompleteBy  int    `json:"complete_by"`
  UserID      string `json:"user_id"`
  CompletedAt int    `json:"completed_at"`
}
