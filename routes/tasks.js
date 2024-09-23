const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController.js');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
