const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  comments: [{
    type: Schema.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Article', ArticleSchema);
