import express from 'express';

const router = express.Router();

router.get('/todos', () => console.log('api todos get(list) hit'));

router.get('/todos/:id', () => console.log('api todos get(list) hit'));

router.post('/todos', () => console.log('api todos get(list) hit'));

router.put('/todos/:id', () => console.log('api todos put hit'));

router.put('/todos/:id', () => console.log('api todos put hit'));

export default router;