import express from 'express';
import * as todos from '../todos/index';

const todosRouter = express.Router();

todosRouter.get('/todos', todos.listTodosController);

todosRouter.get('/todos/:id', todos.getTodoController);

todosRouter.post('/todos', todos.createTodoController);

todosRouter.put('/todos', todos.updateTodoController);

todosRouter.delete('/todos/:id', todos.deleteTodoController);

export default todosRouter;