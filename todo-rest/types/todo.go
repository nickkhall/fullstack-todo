package types

type Column struct {
  ColumnName string `json:"name"`
}

type Todo struct {
  ID          string `json:"id"`
  Name        string `json:"name"`
  Description string `json:"description"`
  CreatedAt   int    `json:"createdAt"`
  Completed   bool   `json:"completed"`
  CompleteBy  int    `json:"completeBy"`
  UserID      string `json:"userId"`
  CompletedAt int    `json:"completedAt"`
  GroupID     string `json:"groupID"`
  ColumnName  string `json:"columnName"`
}

type ColumnsTodo struct {
  ID          string `json:"id"`
  Name        string `json:"name"`
  Description string `json:"description"`
  CreatedAt   int    `json:"createdAt"`
  Completed   bool   `json:"completed"`
  CompleteBy  int    `json:"completeBy"`
  CompletedAt int    `json:"completedAt"`
}

type TodoResponse struct {
  Columns  map[string][]ColumnsTodo `json:"columns"`
}
