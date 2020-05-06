const mongoose = require('mongoose');
const Product = require('../models/Product');
const mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
const config = require('./server/config/key');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

try {
  products.save();
  console.log('Succeeded');
} catch (e) {
  print(e);
}

function exit() {
  mongoose.disconnect();
}
