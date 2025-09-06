const { 
    mockBrokers, 
    mockProfessionals, 
    mockHowItWorks, 
    mockSuccessStories, 
    mockWhyChoose 
} = require('./mockData');

// Broker controllers
const getAllBrokers = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Brokers retrieved successfully",
            data: mockBrokers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving brokers",
            error: error.message
        });
    }
};

const getTopBrokers = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Top brokers retrieved successfully",
            data: mockBrokers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving top brokers",
            error: error.message
        });
    }
};

// Professional controllers
const getAllProfessionals = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Professionals retrieved successfully",
            data: mockProfessionals
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving professionals",
            error: error.message
        });
    }
};

const getTopProfessionals = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Top professionals retrieved successfully",
            data: mockProfessionals
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving top professionals",
            error: error.message
        });
    }
};

// How It Works controllers
const getAllHowItWorks = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "How It Works items retrieved successfully",
            data: mockHowItWorks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving How It Works items",
            error: error.message
        });
    }
};

// Success Story controllers
const getAllSuccessStories = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Success stories retrieved successfully",
            data: mockSuccessStories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving success stories",
            error: error.message
        });
    }
};

// Why Choose controllers
const getAllWhyChoose = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Why Choose items retrieved successfully",
            data: mockWhyChoose
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving Why Choose items",
            error: error.message
        });
    }
};

module.exports = {
    getAllBrokers,
    getTopBrokers,
    getAllProfessionals,
    getTopProfessionals,
    getAllHowItWorks,
    getAllSuccessStories,
    getAllWhyChoose
};