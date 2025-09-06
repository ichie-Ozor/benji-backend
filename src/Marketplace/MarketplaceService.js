const { 
    Broker, 
    Professional, 
    HowItWorks, 
    SuccessStory, 
    WhyChoose 
} = require('./MarketplaceModel');

// Broker services
const createBrokerService = async (brokerData) => {
    const broker = new Broker(brokerData);
    await broker.save();
    return broker;
};

const getAllBrokersService = async () => {
    const brokers = await Broker.find();
    return brokers;
};

const getTopBrokersService = async (limit = 5) => {
    const brokers = await Broker.find().sort({ createdAt: -1 }).limit(limit);
    return brokers;
};

// Professional services
const createProfessionalService = async (professionalData) => {
    const professional = new Professional(professionalData);
    await professional.save();
    return professional;
};

const getAllProfessionalsService = async () => {
    const professionals = await Professional.find();
    return professionals;
};

const getTopProfessionalsService = async (limit = 6) => {
    const professionals = await Professional.find().sort({ createdAt: -1 }).limit(limit);
    return professionals;
};

// How It Works services
const createHowItWorksService = async (howItWorksData) => {
    const howItWorks = new HowItWorks(howItWorksData);
    await howItWorks.save();
    return howItWorks;
};

const getAllHowItWorksService = async () => {
    const howItWorks = await HowItWorks.find();
    return howItWorks;
};

// Success Story services
const createSuccessStoryService = async (successStoryData) => {
    const successStory = new SuccessStory(successStoryData);
    await successStory.save();
    return successStory;
};

const getAllSuccessStoriesService = async () => {
    const successStories = await SuccessStory.find();
    return successStories;
};

// Why Choose services
const createWhyChooseService = async (whyChooseData) => {
    const whyChoose = new WhyChoose(whyChooseData);
    await whyChoose.save();
    return whyChoose;
};

const getAllWhyChooseService = async () => {
    const whyChooseItems = await WhyChoose.find();
    return whyChooseItems;
};

module.exports = {
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
};