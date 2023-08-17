const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const todoSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  owner: { type: String, ref: 'user', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  completedDate: { type: Date },
  completed: { type: Boolean, required: false },
  lastModified: { type: Date, defualt: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
