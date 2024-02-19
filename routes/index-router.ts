import express from 'express';
import authRoutes from './auth-routes';
const router = express.Router();

// Include authRoutes
router.use('/auth', authRoutes);

export default router;