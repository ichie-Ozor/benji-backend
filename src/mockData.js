// Mock data for testing without a database
const mockBrokers = [
    {
        _id: "1",
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
        _id: "2",
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
        _id: "3",
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
    }
];

const mockProfessionals = [
    {
        _id: "1",
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
        _id: "2",
        name: "John Smith",
        title: "Senior Sales Executive",
        experience: 5,
        location: "Lagos",
        rating: [
            {
                avg: 250000,
                desc: "Avg Monthly Money in"
            },
            {
                percentage: 85,
                detail: "Cold Lead Closing Rate"
            },
            {
                target: 90,
                desc: "avg Monthly Target"
            },
            {
                retention: 70,
                purpose: "retention Rate"
            }
        ],
        features: ["Lead Conversation", "Retention", "Business Development"],
        reviews: {
            amt: 4.2,
            number: 380
        }
    }
];

const mockHowItWorks = [
    {
        _id: "1",
        title: "Build Verified Profile",
        detail: "Employers submit performance data to our secure platform. No self-reporting needed.",
        icon: "page"
    },
    {
        _id: "2",
        title: "Get Your Performance Rating",
        detail: "Our algorithm calculates your rating based on consistent, objective performance metrics Verified By Employers",
        icon: "star"
    },
    {
        _id: "3",
        title: "Research Culture",
        detail: "Access employee data on company treatment and team performance history.",
        icon: "search"
    },
    {
        _id: "4",
        title: "Connect & Match",
        detail: "Connect Get matched with brokers who value your style and career goals.",
        icon: "chain"
    }
];

const mockSuccessStories = [
    {
        _id: "1",
        icon: "person",
        name: "Sarah Mustapha",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 40,
        duration: 3
    },
    {
        _id: "2",
        icon: "person",
        name: "Adamu Mustadeen",
        title: "Senior Sales Executive",
        desc: "We hired 3 top performers in one month. Their verified ratings eliminated guesswork and our team's productivity increased 60%.",
        sal: 60,
        duration: 3
    }
];

const mockWhyChoose = [
    {
        _id: "1",
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "arrow"
    },
    {
        _id: "2",
        title: "Objective Performance Tracking",
        detail: "No more guessing. Access verified sales performance data and industry-standard ratings that employers trust and candidates can rely on.",
        icon: "pad"
    }
];

module.exports = {
    mockBrokers,
    mockProfessionals,
    mockHowItWorks,
    mockSuccessStories,
    mockWhyChoose
};