const { Schema, model } = require('mongoose');

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter customer name"]
    },
    number: {
        type: String,
        required: [true, "Please enter phone number"]
    },
    address: {
        type: String,
        required: [true, "Please enter address"]
    },
    state: {
        type: String,
        required: [true, "Please enter state"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    country: {
        type: String,
        required: [true, "Please enter country"]
    },
    religion: {
        type: String,
        required: [true, "Please enter religion"]
    },
    birthday: {
        type: Date,
        required: [true, "Please enter birthday"]
    },
    wedanniversary: {
        type: Date,
        required: [true, "Please enter wedding anniversary"]
    }
}, { timestamps: true });

const Customer = model("Customer", CustomerSchema)
module.exports = Customer