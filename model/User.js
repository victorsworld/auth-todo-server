const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');


const userSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  todos: [{type: String, ref: "todo"}],
  hashPassword: { type: String, required: true },
  createdAt: { type: String, default: Date.now },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
