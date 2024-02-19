// @ts-ignore
import express from 'express';
import authRoutes from './auth-routes';
import * as UserController from "../controllers/user-controller";
const router = express.Router();

router.use('/auth', authRoutes);

router.post('/user/signUp', UserController.signUp);
router.post('/user/send-invites', UserController.sendInvite);

export default router;