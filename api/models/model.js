const mongoose = require('mongoose');

const { Schema } = mongoose;

// Setup schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: { type: String },
  age: { type: Number },
});

// Export model
module.exports = mongoose.model('User', userSchema);
