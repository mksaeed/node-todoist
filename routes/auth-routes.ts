// @ts-ignore
import express from 'express';
import * as AuthController from '../controllers/auth-controller';

const router = express.Router();

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     summary: Register a new user with an invite token
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', AuthController.login);


export default router;