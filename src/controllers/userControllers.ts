import { Request, Response } from 'express';
import Data from '../models/userModels';
// import { Server } from 'socket.io';

// Post api
export const createData = async (req: Request, res: Response) => {
  try {
    const { value, label } = req.body;

    // Check if value and label fields are provided
    if (!value || !label) {
      return res.status(400).json({ error: 'Both value and label fields are required.' });
    }

    // Check if value and label already exist in the database
    const existingData = await Data.findOne({ value, label });
    if (existingData) {
      return res.status(409).json({ error: 'Data with the same value and label already exists.' });
    }

    const newData = new Data({ value, label });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


// get api
export const getLatestData = async (_: Request, res: Response) => {
  try {
    const data = await Data.find().sort('-timestamp').limit(10);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};