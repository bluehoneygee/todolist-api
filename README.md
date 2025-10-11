# ToDoList RESTful API with JWT Authentication

> RESTful API lengkap untuk mengelola ToDo List dengan sistem authentication dan authorization menggunakan JWT, Express.js, dan MongoDB.

---

## Features

### Authentication & Authorization

- User registration dengan email validation
- User login dengan JWT token generation
- Password hashing menggunakan bcrypt
- JWT-based authentication untuk protected routes
- Role-based access control (User & Admin)
- Profile management (view & update)
- Password update dengan validasi password lama

### ToDo Management

- Create, Read, Update, Delete ToDo
- Todo ownership (user hanya bisa akses todo milik sendiri)
- Admin dapat mengakses semua todos dari semua user
- Toggle completion status
- Priority levels: low, medium, high
- Due date tracking
- Todo statistics (total, completed, pending, by priority)
- Automatic timestamps (createdAt, updatedAt)

### Admin Features

- View semua users
- Delete user (beserta todos miliknya)
- System statistics (total users, todos)
- Access ke semua todos dari semua users

---

## API Endpoints

Base URL: `http://localhost:3000`

### 1. Authentication Endpoints

| Method | Endpoint                    | Description           | Auth Required |
| ------ | --------------------------- | --------------------- | ------------- |
| POST   | `/api/auth/register`        | Register user baru    | ❌            |
| POST   | `/api/auth/login`           | Login user            | ❌            |
| GET    | `/api/auth/me`              | Get current user info | ✅            |
| PUT    | `/api/auth/update-profile`  | Update profile        | ✅            |
| PUT    | `/api/auth/update-password` | Update password       | ✅            |

### 2. Todo Endpoints

| Method | Endpoint                | Description                                | Auth Required |
| ------ | ----------------------- | ------------------------------------------ | ------------- |
| GET    | `/api/todos`            | Get all todos (user's own or all if admin) | ✅            |
| GET    | `/api/todos/:id`        | Get single todo                            | ✅            |
| POST   | `/api/todos`            | Create new todo                            | ✅            |
| PUT    | `/api/todos/:id`        | Update todo                                | ✅            |
| PATCH  | `/api/todos/:id/toggle` | Toggle completion status                   | ✅            |
| DELETE | `/api/todos/:id`        | Delete todo                                | ✅            |
| GET    | `/api/todos/stats`      | Get todo statistics                        | ✅            |

### 3. Admin Endpoints

| Method | Endpoint               | Description           | Auth Required | Role  |
| ------ | ---------------------- | --------------------- | ------------- | ----- |
| GET    | `/api/admin/users`     | Get all users         | ✅            | Admin |
| DELETE | `/api/admin/users/:id` | Delete user           | ✅            | Admin |
| GET    | `/api/admin/stats`     | Get system statistics | ✅            | Admin |

---

## Request & Response Examples

### 1. Register User

**Request:**

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Anggi",
  "email": "anggi@mail.com",
  "password": "password123",
  "role": "user"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "6789abc123def456",
      "name": "Anggi",
      "email": "anggi@mail.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Login

**Request:**

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "anggi@mail.com",
  "password": "password123"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "6789abc123def456",
      "name": "Anggi",
      "email": "anggi@mail.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 3. Get Current User

**Request:**

```http
GET /api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "_id": "6789abc123def456",
    "name": "anggi@mail.com",
    "email": "anggi@mail.com",
    "role": "user",
    "createdAt": "2025-10-11T10:30:00.000Z",
    "updatedAt": "2025-10-11T10:30:00.000Z"
  }
}
```

### 4. Create Todo

**Request:**

```http
POST /api/todos
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "title": "Belajar Express.js",
  "description": "Membuat RESTful API dengan Authentication",
  "priority": "high",
  "dueDate": "2025-10-20"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "_id": "abc123def456",
    "title": "Belajar Express.js",
    "description": "Membuat RESTful API dengan Authentication",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-10-20T00:00:00.000Z",
    "user": "6789abc123def456",
    "createdAt": "2025-10-11T10:35:00.000Z",
    "updatedAt": "2025-10-11T10:35:00.000Z"
  }
}
```

### 5. Get All Todos

**Request:**

```http
GET /api/todos
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "abc123def456",
      "title": "Belajar Express.js",
      "description": "Membuat RESTful API",
      "completed": false,
      "priority": "high",
      "dueDate": "2025-10-20T00:00:00.000Z",
      "user": {
        "_id": "6789abc123def456",
        "name": "Anggi",
        "email": "anggi@mail.com"
      },
      "createdAt": "2025-10-11T10:35:00.000Z",
      "updatedAt": "2025-10-11T10:35:00.000Z"
    },
    {
      "_id": "def456abc789",
      "title": "Deploy ke Production",
      "description": "Deploy API ke server",
      "completed": true,
      "priority": "medium",
      "dueDate": "2025-10-15T00:00:00.000Z",
      "user": {
        "_id": "6789abc123def456",
        "name": "Anggi",
        "email": "anggi@mail.com"
      },
      "createdAt": "2025-10-10T08:20:00.000Z",
      "updatedAt": "2025-10-11T09:15:00.000Z"
    }
  ]
}
```

### 6. Update Todo

**Request:**

```http
PUT /api/todos/abc123def456
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "title": "Belajar Express.js - Updated",
  "completed": true,
  "priority": "medium"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "_id": "abc123def456",
    "title": "Belajar Express.js - Updated",
    "description": "Membuat RESTful API dengan Authentication",
    "completed": true,
    "priority": "medium",
    "dueDate": "2025-10-20T00:00:00.000Z",
    "user": "6789abc123def456",
    "createdAt": "2025-10-11T10:35:00.000Z",
    "updatedAt": "2025-10-11T11:20:00.000Z"
  }
}
```

### 7. Toggle Todo Completion

**Request:**

```http
PATCH /api/todos/abc123def456/toggle
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Todo status toggled successfully",
  "data": {
    "_id": "abc123def456",
    "title": "Belajar Express.js",
    "completed": true,
    "priority": "high",
    "user": "6789abc123def456",
    "createdAt": "2025-10-11T10:35:00.000Z",
    "updatedAt": "2025-10-11T11:25:00.000Z"
  }
}
```

### 8. Get Todo Statistics

**Request:**

```http
GET /api/todos/stats
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "total": 10,
    "completed": 6,
    "pending": 4,
    "high": 2,
    "medium": 5,
    "low": 3
  }
}
```

### 9. Delete Todo

**Request:**

```http
DELETE /api/todos/abc123def456
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Todo deleted successfully"
}
```

### 10. Get All Users (Admin Only)

**Request:**

```http
GET /api/admin/users
Authorization: Bearer {admin_token}
```

**Response (200 OK):**

```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "6789abc123def456",
      "name": "Anggi",
      "email": "anggi@mail.com",
      "role": "user",
      "createdAt": "2025-10-11T10:30:00.000Z"
    },
    {
      "_id": "abc456def789",
      "name": "Admin User",
      "email": "admin@example.com",
      "role": "admin",
      "createdAt": "2025-10-10T08:15:00.000Z"
    }
  ]
}
```

### 11. Get System Statistics (Admin Only)

**Request:**

```http
GET /api/admin/stats
Authorization: Bearer {admin_token}
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "users": 10,
    "todos": {
      "total": 50,
      "completed": 30,
      "pending": 20
    }
  }
}
```

---

## Authorization Rules

### User Role (role: "user")

| Permission                | Status       |
| ------------------------- | ------------ |
| Register & Login          | ✅ Allowed   |
| Create own todos          | ✅ Allowed   |
| View own todos            | ✅ Allowed   |
| Update own todos          | ✅ Allowed   |
| Delete own todos          | ✅ Allowed   |
| View other user's todos   | ❌ Forbidden |
| Update other user's todos | ❌ Forbidden |
| Access admin routes       | ❌ Forbidden |

### Admin Role (role: "admin")

| Permission                    | Status     |
| ----------------------------- | ---------- |
| All user permissions          | ✅ Allowed |
| View all todos from all users | ✅ Allowed |
| Update any todo               | ✅ Allowed |
| Delete any todo               | ✅ Allowed |
| View all users                | ✅ Allowed |
| Delete users                  | ✅ Allowed |
| Access system statistics      | ✅ Allowed |

---

## Error Handling

### Error Response Format

```json
{
  "success": false,
  "message": "Error message description",
  "error": "Detailed error information"
}
```

### Common Error Codes

| Status Code | Description           | Example                                   |
| ----------- | --------------------- | ----------------------------------------- |
| `400`       | Bad Request           | Validation error, missing required fields |
| `401`       | Unauthorized          | Invalid/expired token, login required     |
| `403`       | Forbidden             | Insufficient permissions                  |
| `404`       | Not Found             | Resource not found                        |
| `500`       | Internal Server Error | Server/database error                     |

### Error Examples

**400 Bad Request - Validation Error:**

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": ["Email is required", "Password must be at least 6 characters"]
}
```

**401 Unauthorized:**

```json
{
  "success": false,
  "message": "Not authorized to access this route. Please login."
}
```

**403 Forbidden:**

```json
{
  "success": false,
  "message": "User role 'user' is not authorized to access this route"
}
```

**404 Not Found:**

```json
{
  "success": false,
  "message": "Todo not found"
}
```

**409 Conflict - Duplicate Email:**

```json
{
  "success": false,
  "message": "User already exists with this email"
}
```
