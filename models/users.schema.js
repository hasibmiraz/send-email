const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  mobileNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
