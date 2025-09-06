const {
    createBrokerService,
    getAllBrokersService,
    getTopBrokersService,
    createProfessionalService,
    getAllProfessionalsService,
    getTopProfessionalsService,
    createHowItWorksService,
    getAllHowItWorksService,
    createSuccessStoryService,
    getAllSuccessStoriesService,
    createWhyChooseService,
    getAllWhyChooseService
} = require('./MarketplaceService');

// Broker controllers
const createBroker = async (req, res) => {
    try {
        const broker = await createBrokerService(req.body);
        res.status(201).json({
            success: true,
            message: "Broker created successfully",
            data: broker
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating broker",
            error: error.message
        });
    }
};

const getAllBrokers = async (req, res) => {
    try {
        const brokers = await getAllBrokersService();
        res.status(200).json({
            success: true,
            message: "Brokers retrieved successfully",
            data: brokers
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
        const limit = req.query.limit ? parseInt(req.query.limit) : 5;
        const brokers = await getTopBrokersService(limit);
        res.status(200).json({
            success: true,
            message: "Top brokers retrieved successfully",
            data: brokers
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
const createProfessional = async (req, res) => {
    try {
        const professional = await createProfessionalService(req.body);
        res.status(201).json({
            success: true,
            message: "Professional created successfully",
            data: professional
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating professional",
            error: error.message
        });
    }
};

const getAllProfessionals = async (req, res) => {
    try {
        const professionals = await getAllProfessionalsService();
        res.status(200).json({
            success: true,
            message: "Professionals retrieved successfully",
            data: professionals
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
        const limit = req.query.limit ? parseInt(req.query.limit) : 6;
        const professionals = await getTopProfessionalsService(limit);
        res.status(200).json({
            success: true,
            message: "Top professionals retrieved successfully",
            data: professionals
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
const createHowItWorks = async (req, res) => {
    try {
        const howItWorks = await createHowItWorksService(req.body);
        res.status(201).json({
            success: true,
            message: "How It Works item created successfully",
            data: howItWorks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating How It Works item",
            error: error.message
        });
    }
};

const getAllHowItWorks = async (req, res) => {
    try {
        const howItWorks = await getAllHowItWorksService();
        res.status(200).json({
            success: true,
            message: "How It Works items retrieved successfully",
            data: howItWorks
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
const createSuccessStory = async (req, res) => {
    try {
        const successStory = await createSuccessStoryService(req.body);
        res.status(201).json({
            success: true,
            message: "Success story created successfully",
            data: successStory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating success story",
            error: error.message
        });
    }
};

const getAllSuccessStories = async (req, res) => {
    try {
        const successStories = await getAllSuccessStoriesService();
        res.status(200).json({
            success: true,
            message: "Success stories retrieved successfully",
            data: successStories
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
const createWhyChoose = async (req, res) => {
    try {
        const whyChoose = await createWhyChooseService(req.body);
        res.status(201).json({
            success: true,
            message: "Why Choose item created successfully",
            data: whyChoose
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating Why Choose item",
            error: error.message
        });
    }
};

const getAllWhyChoose = async (req, res) => {
    try {
        const whyChooseItems = await getAllWhyChooseService();
        res.status(200).json({
            success: true,
            message: "Why Choose items retrieved successfully",
            data: whyChooseItems
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
    createBroker,
    getAllBrokers,
    getTopBrokers,
    createProfessional,
    getAllProfessionals,
    getTopProfessionals,
    createHowItWorks,
    getAllHowItWorks,
    createSuccessStory,
    getAllSuccessStories,
    createWhyChoose,
    getAllWhyChoose
};