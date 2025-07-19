const express = require('express')
const {
    createAccount,
    getAllAcountController,
    getOneAcountController
} = require('./Registration.js')

const accountRoute = express.Router();

accountRoute.route('/signup').post(createAccount)
accountRoute.route("/getaccount").get(getAllAcountController)
accountRoute.route('/getOneAccount').get(getOneAcountController)

module.exports = accountRoute