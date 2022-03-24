const Product = require('../models/ecommerce');
const getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
const createProducts = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Product added successfully');
    }
  });
};
const editProducts = (req, res) => {
  const updateOb = req.body;
  Product.findByIdAndUpdate(req.params.id, updateOb, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Product with id as ${req.params.id} is updated`);
    }
  });
};
const deleteProductWithId = (req, res) => {
  Product.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(`Product with id as ${req.params.id} is removed`);
    }
  });
};
module.exports = {
  getProducts,
  createProducts,
  editProducts,
  deleteProductWithId,
};
