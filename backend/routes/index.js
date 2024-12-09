import express from 'express';
import UserController from '../api/controllers/UserController.js';

const userController = new UserController();

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello world')
});

router.post('/users', userController.createUser)
router.get('/users', userController.findAll)
router.get('/users/:id', userController.findById)

export default router;