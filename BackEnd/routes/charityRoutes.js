import express from 'express';
import Charity from '../models/charitySchema.js'; // Path to the Charity model
import { authenticateToken } from '../helpers/authMiddleware.js'; // Path to the authMiddleware
import multer from 'multer'; // Import multer for handling file uploads
import path from 'path'; // Import path to manage file paths

const router = express.Router();

// Set up multer storage for local file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename for each image
  }
});

const upload = multer({ storage: storage }); // Initialize multer with the storage config

// POST route to create a charity post
router.post("/create", authenticateToken, upload.single('image'), async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);
    
    const { title, category, summary } = req.body;
    let imageUrl = '';

    // Check if an image was uploaded
    if (req.file) {
      // Store the local image path
      imageUrl = `/uploads/${req.file.filename}`;
      console.log("Image uploaded locally:", imageUrl);
    }

    // Validate required fields
    if (!title || !category || !summary) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new charity post with or without the image
    const newCharityPost = new Charity({
      title,
      category,
      summary,
      photo: imageUrl || '', // Use the local image path or empty string if no image
      createdBy: req.user._id // Add user reference for delete and update operations
    });

    // Save the new charity post to the database
    await newCharityPost.save();
    console.log("Post saved successfully:", newCharityPost);

    // Return the newly created post
    res.status(201).json(newCharityPost);
  } catch (error) {
    console.error("Error creating charity post:", error);
    res.status(500).json({ 
      message: "Error creating charity post", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
});

// Route to get all charity posts
router.get("/browse", async (req, res) => {
  try {
    const posts = await Charity.find(); // Fetch all charity posts from the database
    
    // Loop through the posts and set image paths
    const updatedPosts = posts.map(post => ({
      ...post.toObject(),
      image: post.image ? post.image : '/uploads/default.png' // Use default image if no image exists
    }));
    
    res.status(200).json(updatedPosts); // Send the updated posts as the response
  } catch (error) {
    console.error("Error fetching charity posts:", error);
    res.status(500).json({ message: "Error fetching charity posts", error: error.message });
  }
});

export default router;
