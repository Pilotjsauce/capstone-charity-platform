import { Router } from 'express';
//import ImportedCharityNameHere from '../models/userSchema.js';
const router = Router()

//commented code subject to change

/*
Skeleton of .get for Charity profiles:
router.get('/', async (req, res) => {
  try {
    const charities = await ImportedCharityNameHere.find();
    res.status(200).json(charities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
*/

/*
Skeleton of .Post:
router.post('/', async (req, res) => {
  try {
    const { charityName, contactInfo, charityDescription } = req.body;
    const newCharity = new charity({ charityName, contactInfo, charityDescription });
    await newCharity.save();
    res.status(201).json(newCharity);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});
*/

export default router;