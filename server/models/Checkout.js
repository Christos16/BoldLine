const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const checkoutProduct = new Schema({
  firstname: {
    type: String,
    maxlength: 50
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  address: {
    type: String
  }
});

const Checkout = mongoose.model('checkout', checkoutProduct);

module.exports = Checkout;
