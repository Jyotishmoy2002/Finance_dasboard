# Finance Dashboard Backend API

This backend provides APIs for managing users, financial records, and dashboard analytics.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Base URL

http://localhost:5000/api

## Authentication

All protected routes require a JWT token.

### Header:
Authorization: Bearer <token>

## Roles

- Viewer → Can only view data
- Analyst → Can view records and dashboard
- Admin → Full access (CRUD + user management)

### Register User
POST /auth/register

Body:
{
  "name": "Jyotishmoy",
  "email": "jyotish@test.com",
  "password": "123456",
  "role": "admin"
}

### Get All Users
GET /users

### Create User
POST /users

### Update Role
PATCH /users/:id/role

### Update Status
PATCH /users/:id/status

### Create Record
POST /records

Body:
{
  "amount": 1000,
  "type": "income",
  "category": "salary"
}

### Filter Records

GET /records?type=income
GET /records?category=food
GET /records?startDate=2026-01-01&endDate=2026-02-01

### Summary
GET /dashboard/summary

Response:
{
  "totalIncome": 50000,
  "totalExpenses": 20000,
  "netBalance": 30000
}

## Error Handling

Example:
{
  "success": false,
  "message": "User not found"
}

## Assumptions

- JWT is used for authentication
- Only Admin can create/update/delete users
- Records belong to the logged-in user
- MongoDB is used for persistence

## Project Structure

src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/
 ├── routes/
 ├── middlewares/