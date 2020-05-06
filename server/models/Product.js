const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  imagePath: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  size: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    default: 0
  },
  color: {
    type: String
  },
  quantity: {
    type: Number
  },
  department: {
    type: String
  },
  menCategory: {
    type: Number,
    default: 1
  },
  womenCategory: {
    type: Number,
    default: 1
  }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;

module.exports.getAllProducts = function(query, sort, callback) {
  Product.find(query, null, sort, callback);
};
