// @ts-ignore
import express from 'express';
import authRoutes from './auth-routes';
import * as UserController from "../controllers/user-controller";
const router = express.Router();

router.use('/auth', authRoutes);


/**
 * @swagger
 * /v1/user/signUp:
 *   post:
 *     summary: Register a new user with an invite token
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               inviteToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: User Successfully Registered
 */
router.post('/user/signUp', UserController.signUp);

/**
 * @swagger
 * /v1/user/send-invites:
 *   post:
 *     summary: Send an invite to a user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminId:
 *                 type: number
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Invite Sent Successfully
 */
router.post('/user/send-invites', UserController.sendInvite);

export default router;