const express = require('express');
const {
    getAllBrokers,
    getTopBrokers,
    getAllProfessionals,
    getTopProfessionals,
    getAllHowItWorks,
    getAllSuccessStories,
    getAllWhyChoose
} = require('./MockController');

const mockRoute = express.Router();

// Broker routes
mockRoute.route('/brokers').get(getAllBrokers);
mockRoute.route('/brokers/top').get(getTopBrokers);

// Professional routes
mockRoute.route('/professionals').get(getAllProfessionals);
mockRoute.route('/professionals/top').get(getTopProfessionals);

// How It Works routes
mockRoute.route('/how-it-works').get(getAllHowItWorks);

// Success Story routes
mockRoute.route('/success-stories').get(getAllSuccessStories);

// Why Choose routes
mockRoute.route('/why-choose').get(getAllWhyChoose);

module.exports = mockRoute;