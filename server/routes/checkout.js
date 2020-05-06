const express = require('express');
const router = express.Router();
const Checkout = require('../models/Checkout');

router.post('/user', (req, res) => {
  const newOrder = new Checkout(req.body);
  newOrder.save().then(user => res.json({ user, checkoutSuccess: true }));
});

router.post('/successPayment', (req, res) => {
  let bookings = [];
  let transactionData = {};

  req.body.cartDetail.forEach(item => {
    bookings.push({
      dateofPurchase: Date.now(),
      name: item.title,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID
    });
  });

  transactionData.user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    email: req.body.email
  };

  transactionData.data = req.body.paymentData;

  transactionData.user = bookings;

  const payment = new Payment(transactionData);
  payment.save((err, doc) => {
    if (err) return res.json({ success: false, err });
  });
});

module.exports = router;
