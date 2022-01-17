import express from 'express';
import * as todos from '../todos/index';

const router = express.Router();

router.get('/todos', todos.listTodosController);

router.get('/todos/:id', todos.getTodoController);

router.post('/todos', todos.createTodoController);

router.put('/todos', todos.updateTodoController);

router.delete('/todos/:id', todos.deleteTodoController);

export default router;