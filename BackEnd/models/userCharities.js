import mongoose from 'mongoose';

const charitySchema = new mongoose.Schema({
  id_: {
    type: Number,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  }
});

const Charity = mongoose.model('Charity', charitySchema);
export default Charity;

/**
 _id: "1", //unique ID for each of the post
      photo:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?cs=srgb&dl=pexels-rdne-6646918.jpg&fm=jpg",
      title: "Lunchroom Volunteer",
      category: "Food",
      summary:
        "Help out the lunch team at local schools",
 */