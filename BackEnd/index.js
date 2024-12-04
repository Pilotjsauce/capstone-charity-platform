import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js' 
import testRoute from './routes/testRoute.js'
import userCharities from `./routes/userCharities.js` 
import { clerkMiddleware } from '@clerk/express'

dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());
app.use( "/api/users",userRoutes)
app.use("/api/charities", userCharities)
app.use(testRoute)
app.use(clerkMiddleware())
  // Connect to MongoDB
  const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit with failure code
    }
  };
  
  connectDB();
  
  // Middleware to parse JSON
  app.use(express.json());
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

