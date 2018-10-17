const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  _article: {
    type: String,
    ref: 'Article'
  },
  text: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', CommentSchema)
