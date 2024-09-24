const Task = require('../models/Task.js');
const Joi = require('joi');

// Joi schema for task validation
const taskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
    dueDate: Joi.date().optional(),
});

// Create a new task
exports.createTask = async (req, res) => {


    try {
        // Create a new task associated with the authenticated user
        
        const task = new Task({ ...req.body, user: req.user.id });

        await task.save();
        res.status(201).json(task);
    } catch (err) {
        // Internal server error handling
        console.log(err)
        res.status(500).json({ error: 'Server error, failed to create task' });
        
    }
};

// Get all tasks for the authenticated user
exports.getTasks = async (req, res) => {
    try {
        // Find all tasks belonging to the authenticated user
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        // Internal server error handling
        res.status(500).json({ error: 'Server error, failed to fetch tasks' });
    }
};

// Update a task by ID
exports.updateTask = async (req, res) => {

    try {
        // Find and update the task associated with the authenticated user
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            req.body,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (err) {
        // Internal server error handling
        res.status(500).json({ error: 'Server error, failed to update task' });
    }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    try {
        // Find and delete the task associated with the authenticated user
        const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted' });
    } catch (err) {
        // Internal server error handling
        res.status(500).json({ error: 'Server error, failed to delete task' });
    }
};
