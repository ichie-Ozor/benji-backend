const {
    createCustomerService,
    getAllCustomersService,
    getCustomerByIdService,
    updateCustomerService,
    deleteCustomerService
} = require('./CustomerService');

const createCustomer = async (req, res) => {
    try {
        const customer = await createCustomerService(req.body);
        res.status(201).json({
            success: true,
            message: "Customer created successfully",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating customer",
            error: error.message
        });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomersService();
        res.status(200).json({
            success: true,
            message: "Customers retrieved successfully",
            data: customers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving customers",
            error: error.message
        });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await getCustomerByIdService(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Customer retrieved successfully",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving customer",
            error: error.message
        });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await updateCustomerService(id, req.body);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating customer",
            error: error.message
        });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await deleteCustomerService(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting customer",
            error: error.message
        });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};