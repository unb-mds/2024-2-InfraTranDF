import express from 'express';
import UserController from '../api/controllers/UserController.js';
import AuthController from '../api/controllers/AuthController.js';
import authenticateToken from '../api/middlewares/AuthMiddleware.js';
import authenticateAdminToken from '../api/middlewares/AdminMiddleware.js';
import FocusController from '../api/controllers/FocusController.js';

const userController = new UserController();
const authController = new AuthController();
const focusController = new FocusController();

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello world')
});

router.post('/users', userController.createUser)
router.get('/users', authenticateAdminToken, userController.findAll)
router.get('/users/:id', authenticateToken, userController.findById)

router.post('/login', authController.authenticate)

router.get('/focus/:month/:year', focusController.getMonthlyFocusData)

export default router;