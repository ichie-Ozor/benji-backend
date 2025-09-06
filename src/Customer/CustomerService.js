const Customer = require('./CustomerModel');

const createCustomerService = async (customerData) => {
    const customer = new Customer(customerData);
    await customer.save();
    return customer;
};

const getAllCustomersService = async () => {
    const customers = await Customer.find();
    return customers;
};

const getCustomerByIdService = async (id) => {
    const customer = await Customer.findById(id);
    return customer;
};

const updateCustomerService = async (id, updateData) => {
    const customer = await Customer.findByIdAndUpdate(id, updateData, { new: true });
    return customer;
};

const deleteCustomerService = async (id) => {
    const customer = await Customer.findByIdAndDelete(id);
    return customer;
};

module.exports = {
    createCustomerService,
    getAllCustomersService,
    getCustomerByIdService,
    updateCustomerService,
    deleteCustomerService
};