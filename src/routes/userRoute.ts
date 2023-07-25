import express from 'express';
import { createData, getLatestData } from '../controllers/userControllers';

const router = express.Router();

router.post('/data', createData);
router.get('/data', getLatestData);

export default router;