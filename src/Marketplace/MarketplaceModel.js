const { Schema, model } = require('mongoose');

const BrokerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: [{
        type: String
    }],
    locations: [{
        type: String
    }],
    rating: [{
        score: Number,
        title: String,
        amt: String,
        detail: String,
        size: Number,
        percent: Number
    }],
    features: [{
        type: String
    }],
    reviews: {
        amt: Number,
        number: Number
    }
}, { timestamps: true });

const ProfessionalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: [{
        avg: Number,
        desc: String,
        percentage: Number,
        detail: String,
        target: Number,
        retention: Number,
        purpose: String
    }],
    features: [{
        type: String
    }],
    reviews: {
        amt: Number,
        number: Number
    }
}, { timestamps: true });

const HowItWorksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}, { timestamps: true });

const SuccessStorySchema = new Schema({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    sal: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const WhyChooseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Broker = model("Broker", BrokerSchema);
const Professional = model("Professional", ProfessionalSchema);
const HowItWorks = model("HowItWorks", HowItWorksSchema);
const SuccessStory = model("SuccessStory", SuccessStorySchema);
const WhyChoose = model("WhyChoose", WhyChooseSchema);

module.exports = {
    Broker,
    Professional,
    HowItWorks,
    SuccessStory,
    WhyChoose
};