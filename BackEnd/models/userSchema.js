import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: { 
    type: String,
    enum: ['user', 'charity'], //remember that enum makes it so that they can only be one or the other nothing else
    required: true, 
  },
});


const User = mongoose.model('User', userSchema);
export default User;