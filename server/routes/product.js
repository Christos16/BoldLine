const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//GET /products
router.get('/products', function(req, res, next) {
  const { query, order } = categorizeQueryString(req.query);
  Product.getAllProducts(query, order, function(e, products) {
    if (e) {
      e.status = 406;
      return next(e);
    }
    if (products.length < 1) {
      return res.status(404).json({ message: 'products not found' });
    }
    res.json({ products: products });
  });
});

router.post('/getProducts', (req, res, next) => {
  let category = req.query.department;
  let order = req.body.order ? req.body.order : 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let findArgs = {};
  let term = req.body.searchTerm;

  // let productCount = findDocuments();

  //console.log(productCount);

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === 'price') {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1]
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }
  if (term) {
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else if (category === 'Men') {
    Product.find(findArgs)
      .find({ department: 'Men' })
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else if (category === 'Women') {
    Product.find(findArgs)
      .find({ department: 'Women' })
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else {
    Product.find(findArgs)
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  }
});

router.get('/products_by_id', (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === 'array') {
    let ids = req.query.id.split(',');
    productIds = [];
    productIds = ids.map(item => {
      return item;
    });
  }

  //We need to find the product information that belong to productId
  Product.find({ _id: { $in: productIds } }).exec((err, product) => {
    if (err) return req.status(400).send(err);
    return res.status(200).send(product);
  });
});

// Get product by category

router.get('/products_by_category', (req, res) => {
  let category = req.query.department;
  console.log(category);
  if (category === 'Men') {
    Product.find({ department: 'Men' }).exec((err, products) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(products);
    });
  } else if (category === 'Women') {
    Product.find({ department: 'Women' }).exec((err, product) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(product);
    });
  }

  //We need to find the product information that belong to productId
});

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

module.exports = router;
