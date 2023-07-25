import { Request, Response } from 'express';
import Data from '../models/userModels';
import { Server } from 'socket.io';

export const createData = async (req: Request, res: Response) => {
  try {
    const { value, label } = req.body;
    const newData = new Data({ value, label });
    await newData.save();

    const io: Server = req.app.get('io');
    io.emit('newData', newData);

    res.status(201).json(newData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getLatestData = async (_: Request, res: Response) => {
  try {
    const data = await Data.find().sort('-timestamp').limit(10);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};