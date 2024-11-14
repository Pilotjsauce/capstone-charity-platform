import express from 'express';
import cors from "cors"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userSchema.js';

dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {

  })
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

