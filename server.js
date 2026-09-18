
const express = require('express');
const app = express();

let tasks = [
    { id: '1', title: "Study Node.js", completed: false },
    { id: '2', title: "Practice Express", completed: true },
    { id: '3', title: "Solve Problem", completed: false }
];

// App-level logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
};

app.use(logger);
app.use(express.json());

// Check if the requested task exists
const checkTaskId = (req, res, next) => {
    const task = tasks.find(task => task.id === req.params.id);

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    req.task = task;
    next();
};

// Validate request body
const checkBody = (req, res, next) => {
    if (!req.body.title || req.body.completed === undefined) {
        return res.status(400).json({
            message: 'Title and completed status are required'
        });
    }

    next();
};

// Get all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// Get a specific task
app.get('/tasks/:id', checkTaskId, (req, res) => {
    res.status(200).json(req.task);
});

// Create a new task
app.post('/tasks', checkBody, (req, res) => {
    const task = {
        id: String(tasks.length + 1),
        title: req.body.title,
        completed: req.body.completed
    };

    tasks.push(task);

    res.status(201).json({
        message: 'Task created successfully',
        task: task
    });
});

// Update a task
app.put('/tasks/:id', checkTaskId, checkBody, (req, res) => {
    req.task.title = req.body.title;
    req.task.completed = req.body.completed;

    res.status(200).json({
        message: 'Task updated successfully',
        task: req.task
    });
});

// Partially update a task
app.patch('/tasks/:id', checkTaskId, (req, res) => {
    if (!req.body.title && req.body.completed === undefined) {
        return res.status(400).json({
            message: 'At least one field is required'
        });
    }

    if (req.body.title !== undefined) {
        req.task.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
        req.task.completed = req.body.completed;
    }

    res.status(200).json({
        message: 'Task updated successfully',
        task: req.task
    });
});

// Delete a task
app.delete('/tasks/:id', checkTaskId, (req, res) => {
    const index = tasks.findIndex(i => i.id === req.params.id);

    tasks.splice(index, 1);

    return res.status(200).json({
        message: 'Task deleted successfully'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

