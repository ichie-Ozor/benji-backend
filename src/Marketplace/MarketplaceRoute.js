const express = require('express');
const {
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
} = require('./MarketplaceController');

const marketplaceRoute = express.Router();

// Broker routes
marketplaceRoute.route('/brokers').post(createBroker);
marketplaceRoute.route('/brokers').get(getAllBrokers);
marketplaceRoute.route('/brokers/top').get(getTopBrokers);

// Professional routes
marketplaceRoute.route('/professionals').post(createProfessional);
marketplaceRoute.route('/professionals').get(getAllProfessionals);
marketplaceRoute.route('/professionals/top').get(getTopProfessionals);

// How It Works routes
marketplaceRoute.route('/how-it-works').post(createHowItWorks);
marketplaceRoute.route('/how-it-works').get(getAllHowItWorks);

// Success Story routes
marketplaceRoute.route('/success-stories').post(createSuccessStory);
marketplaceRoute.route('/success-stories').get(getAllSuccessStories);

// Why Choose routes
marketplaceRoute.route('/why-choose').post(createWhyChoose);
marketplaceRoute.route('/why-choose').get(getAllWhyChoose);

module.exports = marketplaceRoute;