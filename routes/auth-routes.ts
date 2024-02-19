import express from 'express';
import * as AuthController from '../controllers/auth-controller';

const router = express.Router();

// Login user with validation handled in authController
router.post('/login', AuthController.login);
router.post('/signUp', AuthController.signUp);

export default router;