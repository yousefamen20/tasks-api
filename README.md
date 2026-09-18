# Tasks API

A simple REST API built with Node.js and Express.js for managing tasks.

## Technologies

* Node.js
* Express.js
* JavaScript

## Features

* Get all tasks
* Get a task by ID
* Create a new task
* Update a task
* Partially update a task
* Delete a task
* Request body validation
* Custom middleware
* HTTP status codes
* CRUD operations

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Get all tasks           |
| GET    | `/tasks/:id` | Get a specific task     |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update a task           |
| PATCH  | `/tasks/:id` | Partially update a task |
| DELETE | `/tasks/:id` | Delete a task           |

## Task Object

```json
{
  "id": "1",
  "title": "Study Node.js",
  "completed": false
}
```

## API Examples

### Get All Tasks

**GET** `/tasks`

Response:

```json
[
  {
    "id": "1",
    "title": "Study Node.js",
    "completed": false
  },
  {
    "id": "2",
    "title": "Practice Express",
    "completed": true
  },
  {
    "id": "3",
    "title": "Solve Problem",
    "completed": false
  }
]
```

### Get a Task by ID

**GET** `/tasks/:id`

Example:

```text
GET /tasks/1
```

Response:

```json
{
  "id": "1",
  "title": "Study Node.js",
  "completed": false
}
```

If the task does not exist:

```json
{
  "message": "Task not found"
}
```

### Create a Task

**POST** `/tasks`

Request Body:

```json
{
  "title": "Learn Express.js",
  "completed": false
}
```

Response:

```json
{
  "message": "Task created successfully",
  "task": {
    "id": "4",
    "title": "Learn Express.js",
    "completed": false
  }
}
```

If the request body is invalid:

```json
{
  "message": "Title and completed status are required"
}
```

### Update a Task

**PUT** `/tasks/:id`

PUT updates the task completely.

Example:

```text
PUT /tasks/1
```

Request Body:

```json
{
  "title": "Learn Node.js",
  "completed": true
}
```

Response:

```json
{
  "message": "Task updated successfully",
  "task": {
    "id": "1",
    "title": "Learn Node.js",
    "completed": true
  }
}
```

If the task does not exist:

```json
{
  "message": "Task not found"
}
```

If the request body is invalid:

```json
{
  "message": "Title and completed status are required"
}
```

### Partially Update a Task

**PATCH** `/tasks/:id`

PATCH allows updating one or more fields without replacing the entire task.

Example:

```text
PATCH /tasks/1
```

Request Body:

```json
{
  "completed": true
}
```

Response:

```json
{
  "message": "Task updated successfully",
  "task": {
    "id": "1",
    "title": "Study Node.js",
    "completed": true
  }
}
```

You can also update multiple fields:

```json
{
  "title": "Practice Express.js",
  "completed": true
}
```

Response:

```json
{
  "message": "Task updated successfully",
  "task": {
    "id": "1",
    "title": "Practice Express.js",
    "completed": true
  }
}
```

If no valid field is provided:

```json
{
  "message": "At least one field is required"
}
```

### Delete a Task

**DELETE** `/tasks/:id`

Example:

```text
DELETE /tasks/1
```

Response:

```json
{
  "message": "Task deleted successfully"
}
```

If the task does not exist:

```json
{
  "message": "Task not found"
}
```

## Middleware

The API uses middleware to:

* Log the HTTP method and URL
* Parse JSON request bodies
* Check if a task exists
* Validate request data

### Middleware Flow

```text
Client
  ↓
Logger Middleware
  ↓
JSON Middleware
  ↓
Route Middleware
  ↓
Route Handler
  ↓
Response
  ↓
Client
```

## HTTP Status Codes

| Status Code | Description               |
| ----------- | ------------------------- |
| 200         | Request successful        |
| 201         | Task created successfully |
| 400         | Invalid request data      |
| 404         | Task not found            |

## Project Structure

```text
tasks-api/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/yousefamen20/tasks-api.git
```

### 2. Navigate to the Project

```bash
cd tasks-api
```

### 3. Install Dependencies

```bash
npm install
```

This installs the dependencies listed in `package.json`.

### 4. Start the Server

```bash
node server.js
```

You should see:

```text
Server running on port 3000
```

The API will be available at:

```text
http://localhost:3000
```

## Testing

The API can be tested using Postman by sending requests to the available endpoints.

## Data Storage

The tasks are currently stored in an in-memory JavaScript array.

This means the data will be reset whenever the server is restarted.

## Project Purpose

This project was created as a practice project to apply the fundamentals of building REST APIs with Node.js and Express.js, including routing, middleware, request handling, validation, HTTP methods, status codes, and CRUD operations.
