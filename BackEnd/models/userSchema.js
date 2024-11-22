import { Schema, model } from 'mongoose';

// Define the schema for users
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the User model
const User = model('User', userSchema);

// Export the User model
export default User;