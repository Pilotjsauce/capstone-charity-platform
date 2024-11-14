import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userSchema.js';

dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {

  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Middleware to parse JSON
app.use(express.json());

//Routes insert code here
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
