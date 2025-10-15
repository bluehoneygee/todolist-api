# ToDoList RESTful API with JWT Authentication

> RESTful API lengkap untuk mengelola ToDo List dengan sistem authentication dan authorization menggunakan JWT, Express.js, dan MongoDB.

---

## Live API Deployment (Railway)

Server API sudah di-deploy dan bisa diakses secara publik melalui:
**[https://todolist-api-production-c409.up.railway.app](https://todolist-api-production-c409.up.railway.app)**

---

## Quick Links

- [Interactive API Documentation](https://documenter.getpostman.com/view/47645269/2sB3QNooBP)

- [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/47645269-4389e37f-b17f-4b0b-b4df-973c5017d49a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D47645269-4389e37f-b17f-4b0b-b4df-973c5017d49a%26entityType%3Dcollection%26workspaceId%3D76d9a83e-3e52-4cbe-84f9-e5c9c82d3e01#?env%5BToDoList-Production%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vdG9kb2xpc3QtYXBpLXByb2R1Y3Rpb24tYzQwOS51cC5yYWlsd2F5LmFwcCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly90b2RvbGlzdC1hcGktcHJvZHVjdGlvbi1jNDA5LnVwLnJhaWx3YXkuYXBwIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJodHRwczovL3RvZG9saXN0LWFwaS1wcm9kdWN0aW9uLWM0MDkudXAucmFpbHdheS5hcHAiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZNFpXWmxZV05pTkRFell6Y3dPR0ZpWWpZMU1tTTNNaUlzSW5KdmJHVWlPaUoxYzJWeUlpd2lhV0YwSWpveE56WXdOVFV6TnpJMUxDSmxlSEFpT2pFM05qRXguLi4iLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTRaV1psWVdOaU5ERXpZemN3T0dGaVlqWTFNbU0zTWlJc0luSnZiR1VpT2lKMWMyVnlJaXdpYVdGMElqb3hOell3TlRVek56STFMQ0psZUhBaU9qRTNOakV4TlRnMU1qVjkuMUZZOXkxWUZzcHdfNlRGeVNXMGlWM0xhU0ZXS01YT1pUX1dxZzctYzF5byIsInNlc3Npb25JbmRleCI6MX0seyJrZXkiOiJhZG1pbl90b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalk0WldabFlXTm1OREV6WXpjd09HRmlZalkxTW1NM05TSXNJbkp2YkdVaU9pSmhaRzFwYmlJc0ltbGhkQ0k2TVRjMk1EVTFNelk0TUN3aVpYaHdJam94TnpZeC4uLiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZNFpXWmxZV05tTkRFell6Y3dPR0ZpWWpZMU1tTTNOU0lzSW5KdmJHVWlPaUpoWkcxcGJpSXNJbWxoZENJNk1UYzJNRFUxTXpZNE1Dd2laWGh3SWpveE56WXhNVFU0TkRnd2ZRLmZLWk5EZlB2WDVydktQOFRyLUozTHZXVDRMVTZESmh5Wk01MUJvUWN4NjgiLCJzZXNzaW9uSW5kZXgiOjJ9XQ==)

- Download Collection:
  - [ToDoList_API_Collection.json](./ToDoList_API_Collection.json)
  - [ToDoList_Production_Environment.json](./ToDoList_Production_Environment.json)

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

## API Documentations

### Option 1: Interactive Documentation (Postman)

Dokumentasi interaktif lengkap dengan contoh request/response:

- [Interactive API Documentation](https://documenter.getpostman.com/view/47645269/2sB3QNooBP)

Features:

- ✅ Semua endpoints dengan examples
- ✅ Auto-updated dari collection
- ✅ Bisa test langsung dengan "Run in Postman"
- ✅ Copy-paste ready code snippets

- [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/47645269-4389e37f-b17f-4b0b-b4df-973c5017d49a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D47645269-4389e37f-b17f-4b0b-b4df-973c5017d49a%26entityType%3Dcollection%26workspaceId%3D76d9a83e-3e52-4cbe-84f9-e5c9c82d3e01#?env%5BToDoList-Production%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vdG9kb2xpc3QtYXBpLXByb2R1Y3Rpb24tYzQwOS51cC5yYWlsd2F5LmFwcCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly90b2RvbGlzdC1hcGktcHJvZHVjdGlvbi1jNDA5LnVwLnJhaWx3YXkuYXBwIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiJodHRwczovL3RvZG9saXN0LWFwaS1wcm9kdWN0aW9uLWM0MDkudXAucmFpbHdheS5hcHAiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZNFpXWmxZV05pTkRFell6Y3dPR0ZpWWpZMU1tTTNNaUlzSW5KdmJHVWlPaUoxYzJWeUlpd2lhV0YwSWpveE56WXdOVFV6TnpJMUxDSmxlSEFpT2pFM05qRXguLi4iLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTRaV1psWVdOaU5ERXpZemN3T0dGaVlqWTFNbU0zTWlJc0luSnZiR1VpT2lKMWMyVnlJaXdpYVdGMElqb3hOell3TlRVek56STFMQ0psZUhBaU9qRTNOakV4TlRnMU1qVjkuMUZZOXkxWUZzcHdfNlRGeVNXMGlWM0xhU0ZXS01YT1pUX1dxZzctYzF5byIsInNlc3Npb25JbmRleCI6MX0seyJrZXkiOiJhZG1pbl90b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalk0WldabFlXTm1OREV6WXpjd09HRmlZalkxTW1NM05TSXNJbkp2YkdVaU9pSmhaRzFwYmlJc0ltbGhkQ0k2TVRjMk1EVTFNelk0TUN3aVpYaHdJam94TnpZeC4uLiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZNFpXWmxZV05tTkRFell6Y3dPR0ZpWWpZMU1tTTNOU0lzSW5KdmJHVWlPaUpoWkcxcGJpSXNJbWxoZENJNk1UYzJNRFUxTXpZNE1Dd2laWGh3SWpveE56WXhNVFU0TkRnd2ZRLmZLWk5EZlB2WDVydktQOFRyLUozTHZXVDRMVTZESmh5Wk01MUJvUWN4NjgiLCJzZXNzaW9uSW5kZXgiOjJ9XQ==)

#### Catatan Penting (Postman)

Setelah melakukan **Fork** melalui tombol **Run in Postman**, lakukan ini agar request tidak error:

1. Buka tab **Environments** di Postman
2. Pilih environment **ToDoList-Production**
3. Klik **Set Active** (pojok kanan atas)

> Jika environment tidak diaktifkan, variable seperti `base_url`/`token` tidak terbaca dan Anda bisa mendapatkan error seperti **“DNSLookup: EBADNAME {{base_url}}”** atau **“Not authorized, token failed.”**

### Option 2: Download Postman Collection

Download dan import ke Postman:

- [TodoList_API_Collection.json](./ToDoList_API_Collection.json)
- [TodoList_Production_Environment.json](./ToDoList_Production_Environment.json)

### Option 3: Manual Documentation

Base URL: `http://localhost:3000`

#### 1. Authentication Endpoints

| Method | Endpoint                    | Description           | Auth Required |
| ------ | --------------------------- | --------------------- | ------------- |
| POST   | `/api/auth/register`        | Register user baru    | ❌            |
| POST   | `/api/auth/login`           | Login user            | ❌            |
| GET    | `/api/auth/me`              | Get current user info | ✅            |
| PUT    | `/api/auth/update-profile`  | Update profile        | ✅            |
| PUT    | `/api/auth/update-password` | Update password       | ✅            |

#### 2. Todo Endpoints

| Method | Endpoint                | Description                                | Auth Required |
| ------ | ----------------------- | ------------------------------------------ | ------------- |
| GET    | `/api/todos`            | Get all todos (user's own or all if admin) | ✅            |
| GET    | `/api/todos/:id`        | Get single todo                            | ✅            |
| POST   | `/api/todos`            | Create new todo                            | ✅            |
| PUT    | `/api/todos/:id`        | Update todo                                | ✅            |
| PATCH  | `/api/todos/:id/toggle` | Toggle completion status                   | ✅            |
| DELETE | `/api/todos/:id`        | Delete todo                                | ✅            |
| GET    | `/api/todos/stats`      | Get todo statistics                        | ✅            |

#### 3. Admin Endpoints

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
    "name": "Anggi",
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
