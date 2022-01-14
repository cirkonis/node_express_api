import express from 'express';
import * as todos from '../todos/index';

const router = express.Router();

router.get('/todos', todos.listTodosController);

router.get('/todos/:id', () => console.log('api todos get(list) hit'));

router.post('/todos', () => console.log('api todos get(list) hit'));

router.put('/todos/:id', () => console.log('api todos put hit'));

router.put('/todos/:id', () => console.log('api todos put hit'));

export default router;