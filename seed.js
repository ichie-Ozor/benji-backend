const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const { 
    Broker, 
    Professional, 
    HowItWorks, 
    SuccessStory, 
    WhyChoose 
} = require('./src/Marketplace/MarketplaceModel.js');

dotenv.config();

const brokers = [
    {
        title: "Man United Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 5,
            number: 234
        }
    },
    {
        title: "Swansea Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 1.5,
            number: 234
        }
    },
    {
        title: "Aston Villa Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 2.2,
            number: 234
        }
    },
    {
        title: "Liverpool Forex Company",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 4.1,
            number: 234
        }
    },
    {
        title: "Chelsea Forex",
        details: ["CFDs", "Crypto", "Metals", "Stocks"],
        locations: ["Lagos", "Abuja", "Kumasi"],
        rating: [
            {
                score: 4.9,
                title: "Culture Score"
            },
            {
                amt: "$2.3M",
                detail: "AVG Deal Size"
            },
            {
                size: 127,
                detail: "Team Size"
            },
            {
                percent: 98,
                detail: "Rentention Rate"
            }
        ],
        features: ["Remote-First", "High Commission", "Growth Stage"],
        reviews: {
            amt: 3.9,
            number: 234
        }
    }
];

const professionals = [
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
    {
        name: "Uche Ugwuoke",
        title: "Business Development Manager",
        experience: 8,
        location: "Abuja",
        rating: [
            {
                avg: 300000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 89,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 95,
                desc: "avg Monthly Target"
            },
            {
                retention: 60,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 3.9,
            number: 420
        }
    },
];

const howItWorksData = [
    {
        title: "Build Verified Profile",
        detail: "Employers submit performance data to our secure platform. No self-reporting needed.",
        icon: "page"
    },
    {
        title: "Get Your Performance Rating",
        detail: "Our algorithm calculates your  rating based on consistent, objective performance metrics Verified By Employers",
        icon: "star"
    },
    {
        title: "Research Culture",
        detail: "Access employee data on company treatment and team performance history.",
        icon: "search"
    },
    {
        title: "Connect & Match",
        detail: "Connect Get matched with brokers who value your style and career goals.",
        icon: "chain"
    },
];

const successStories = [
    {
        icon: "person",
        name: "Sarah Mustapha",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 40,
        duration: 3
    },
    {
        icon: "person",
        name: "Adamu Mustadeen",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 60,
        duration: 3
    },
    {
        icon: "person",
        name: "Offor Chukwuegbu",
        title: "Senior Design Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 50,
        duration: 2
    },
    {
        icon: "person",
        name: "Ayo Oniyeye",
        title: "Senior Production Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 30,
        duration: 5
    },
];

const whyChooseData = [
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "arrow"
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "pad"
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "wave"
    },
    {
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "speed"
    },
];

const seedDB = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        
        // Clear existing data
        await Broker.deleteMany({});
        await Professional.deleteMany({});
        await HowItWorks.deleteMany({});
        await SuccessStory.deleteMany({});
        await WhyChoose.deleteMany({});
        
        // Insert new data
        await Broker.insertMany(brokers);
        await Professional.insertMany(professionals);
        await HowItWorks.insertMany(howItWorksData);
        await SuccessStory.insertMany(successStories);
        await WhyChoose.insertMany(whyChooseData);
        
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();