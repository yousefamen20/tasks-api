````markdown
# Tasks API

A simple REST API built with Node.js and Express.js for managing tasks.

## Technologies

- Node.js
- Express.js
- JavaScript

## Features

- Get all tasks
- Get a task by ID
- Create a new task
- Update a task
- Partially update a task
- Delete a task
- Request body validation
- Custom middleware

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a specific task |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| PATCH | `/tasks/:id` | Partially update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Task Object

```json
{
  "id": "1",
  "title": "Study Node.js",
  "completed": false
}
````

## Example

### Create a Task

**POST** `/tasks`

Request Body:

```json
{
  "title": "Learn Express.js",
  "completed": false
}
```

## Middleware

The API uses middleware to:

* Log the HTTP method and URL
* Parse JSON request bodies
* Check if a task exists
* Validate request data

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
node server.js
```

The server will run at:

`http://localhost:3000`

## Project Purpose

This project was created as a practice project to apply the fundamentals of building REST APIs with Node.js and Express.js, including routing, middleware, request handling, validation, and CRUD operations.

```
```
