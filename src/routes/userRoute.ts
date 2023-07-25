import express from 'express';
import { createData, getLatestData } from '../controllers/userControllers';

const router = express.Router();

// Post route
router.post('/data', createData);

// get route
router.get('/data', getLatestData);

export default router;