const { Schema, model } = require('mongoose');

const AccountSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    password: {
        type: String,
        require: [true, "please enter your password"]
    }
}, { timestamps: true });

const Account = model("Account", AccountSchema)
module.exports = Account