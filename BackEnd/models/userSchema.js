import mongoose from 'mongoose'// Import the mongoose library for interacting with MongoDB

const userSchema = new mongoose.Schema({// Define the schema for the User model
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String, // The 'name' field is of type String
    required: true, // This field is mandatory
  },
  email: {
    type: String, // The 'email' field is of type String
    required: true, // This field is mandatory
    unique: true, // Ensures the email is unique in the database
  },
  password: {
    type: String,
    required: true,
  },
  //accountType: { // this needs to be implemented to allow the user to choose while creating their account if they will be making a user or charity account
    //type: String,
    //enum: ['user', 'charity'], //remember that enum makes it so that they can only be one or the other nothing else
    //required: true, 
  //},
})


const User = mongoose.model('User', userSchema)// Create a Mongoose model named 'User' using the defined schema

export default User // Export the User model for use in other parts of the application
