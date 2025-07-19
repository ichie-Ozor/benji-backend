const express = require('express');
const { signInAccount, verifyToken } = require('./AuthController.js')

const authRoute = express.Router();

authRoute.route("/signin").post(signInAccount)
authRoute.route("/verifyToken").get(verifyToken)

module.exports = authRoute;