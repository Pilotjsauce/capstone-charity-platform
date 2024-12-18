import mongoose from 'mongoose'// Import the mongoose library for interacting with MongoDB

const userSchema = new mongoose.Schema({// Define the schema for the User model
  name: {
    type: String, // The 'name' field is of type String
    required: true, // This field is mandatory
  },
  email: {
    type: String, // The 'email' field is of type String
    required: true, // This field is mandatory
    unique: true, // Ensures the email is unique in the database
  },
})

const User = mongoose.model('User', userSchema)// Create a Mongoose model named 'User' using the defined schema

export default User // Export the User model for use in other parts of the application
