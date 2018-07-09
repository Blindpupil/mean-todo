const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural version of your model name.
const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;