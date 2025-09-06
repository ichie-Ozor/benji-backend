const express = require('express');
const {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require('./CustomerController');

const customerRoute = express.Router();

customerRoute.route('/').post(createCustomer);
customerRoute.route('/').get(getAllCustomers);
customerRoute.route('/:id').get(getCustomerById);
customerRoute.route('/:id').put(updateCustomer);
customerRoute.route('/:id').delete(deleteCustomer);

module.exports = customerRoute;