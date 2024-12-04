import { Router } from 'express';
import Charity from '../models/userCharities.js';
const router = Router()

router.get('/', async (req, res) => {
  try {
    const charities = await Charity.find();
    res.status(200).json(charities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id_, photo, title, category, summary } = req.body;
    const newCharity = new Charity({ id_, photo, title, category, summary });
    await newCharity.save();
    res.status(201).json(newCharity);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

export default router;