# 🚀 Finance Dashboard Backend

A backend system for managing financial records, users, and dashboard analytics with role-based access control.

---

## 📌 Overview

This project is built to simulate a finance dashboard backend where different users (Viewer, Analyst, Admin) interact with financial data based on their roles.

The system supports:
- User & role management
- Financial records CRUD operations
- Dashboard analytics (income, expenses, trends)
- Role-based access control (RBAC)
- Input validation and error handling

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Joi Validation
- Jest & Supertest (Testing)

---

## 📁 Project Structure
finance-dashboard-backend/
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── services/
│ ├── repositories/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ ├── validations/
│ ├── constants/
│ └── app.js
│
├── tests/
├── docs/
├── .env
├── package.json
└── server.js

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone <your-repo-link>
cd finance-dashboard-backend

### 2. Install dependencies
npm install

### 3. Create `.env` file
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance-dashboard
JWT_SECRET=your_secret_key

### 4. Run the server
npm run dev

Server will start at:
http://localhost:5000

---

## 🔐 Authentication

- JWT-based authentication
- Token required for protected routes

Header:
Authorization: Bearer <token>

---

## 👥 Roles & Permissions

| Role | Access |
|------|-------|
| Viewer | Read-only access |
| Analyst | View records + dashboard |
| Admin | Full access (CRUD + user management) |

---

## 📊 API Modules

### 1. Auth
- Register user
- Login user
- Get current user

### 2. Users
- Create user
- Get all users
- Update user role/status
- Delete user

### 3. Records
- Create financial record
- Get records (with filters)
- Update record
- Delete record

### 4. Dashboard
- Total income
- Total expenses
- Net balance
- Category breakdown
- Trends

---

## 🔍 Filtering Support

Example:
GET /api/records?type=income
GET /api/records?category=food
GET /api/records?startDate=2026-01-01&endDate=2026-02-01

---

## ⚠️ Error Handling

Standard error format:
{
"success": false,
"message": "Error message"
}

---

## 🧪 Testing

Run tests using:
npm test

Includes:
- User API tests
- Record API tests

---

## 🧠 Assumptions

- JWT is used for authentication
- Only Admin can manage users
- Records belong to authenticated users
- MongoDB is used for persistence
- Basic validation is implemented using Joi

---

## 🚀 Future Improvements

- Pagination for large datasets
- Advanced analytics (yearly trends)
- Rate limiting
- Swagger API documentation
- Docker support

---

## 📌 Author

Jyotishmoy Narzary 
B.Tech CSE, IIIT Bhagalpur  