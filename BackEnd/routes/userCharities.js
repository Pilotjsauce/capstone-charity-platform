import { Router } from 'express';
import Charity from '../models/userCharities.js';
const router = Router()

// the '/' does not have any text because it is defined in the index.js as /api/charities
router.get('/Charities', async (req, res) => {
  try {
    const charities = await Charity.find();
    res.status(200).json(charities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

//in postman the _ for id is added automatically so you dont have to add it to the schema or the rest of the program
router.post('/Charities', async (req, res) => {
  try {
    const { photo, title, category, summary } = req.body;
    const newCharity = new Charity({ photo, title, category, summary });
    await newCharity.save();
    res.status(201).json(newCharity);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

export default router;