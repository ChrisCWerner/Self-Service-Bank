# Self-Service Banking Backend Server

## Features

- [x] Account statement with deposit, redeemals & payment logs;
- [x] View user and transaction details and balance;
- [x] Ability to create transactions (deposit, redeemals & payments);
- [x] Mock database.

## Endpoints

### Get user details:
`
  GET /users/:id
`

### Get account balance:
`
  GET /users/:id/balance
`

### Get transaction details:
`
  GET /transactions/:id
`

### Get user transactions:
`
  GET /transactions/user/:user_id
`

### Create transaction:
`
  POST /users/:user_id/:type
`
> where type is the type of transaction, one of "deposit", "redemption", "payment" and the `payload = { value: Number, currency: String }`
