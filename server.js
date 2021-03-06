const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Promise = require('bluebird')
mongoose.Promise = Promise;

var app = express()
var PORT = process.env.PORT || 3000
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
mongoose.connect('mongodb://heroku_sx8x1270:12345678a@ds135003.mlab.com:35003/heroku_sx8x1270')
const db = mongoose.connection
db.on('error', function(error) {
  console.log('Mongoose Error: ', error)
})
db.once('open', function() {
  console.log('Mongoose connection successful.')
})
app.listen(PORT, function() {
  console.log('App running on port ' + PORT)
})
require('./controllers/apps_controller.js')(app)
