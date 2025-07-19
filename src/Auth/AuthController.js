const bcrypt = require('bcryptjs');
const Account = require('../Authentication/RegistrationModal.js')
const { createAssessToken, verifyTokenService } = require('./AuthService.js')
const { getAccountByemailService } = require('../Authentication/RegistrationService.js')

const signInAccount = async (req, res) => {
    const { email, password } = req.body
    const checkEmailExist = await getAccountByemailService(email)
    if (!checkEmailExist) {
        return res.status(400).json({
            success: false,
            message: `Account with the email ${email} do not exist, please register`
        })
    }
    const comparePassword = await bcrypt.compare(password, checkEmailExist.password)
    console.log(comparePassword, "compare", checkEmailExist)
    if (!comparePassword || email !== checkEmailExist.email) {
        return res.status(400).json({
            success: false,
            message: "You have entered an invalid email and password"
        })
    }
    const assessToken = await createAssessToken(email)
    res.status(200).json({
        success: true,
        message: "you have successfully signed in",
        assessToken,
        checkEmailExist
    })
}

const verifyToken = async (req, res) => {
    try {
        const authToken = req.headers["autorization"];
        const token = authToken?.split(" ")[1];
        if (!token && token.length < 10) {
            return res.status(403).json({
                message: "This token is invalid"
            })
        }
        const verifiedToken = await verifyTokenService(token)
        if (!verifiedToken) {
            return res.status(403).json({
                success: false,
                message: "token verification failed"
            })
        } else {
            const { email } = verifiedToken
            const userDetail = await Account.findOne({ email: email })
            const assessToken = await createAssessToken(email)
            return res.status(200).json({
                success: true,
                userDetail,
                assessToken
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while trying to verify the token",
            err
        })
    }
}

module.exports = {
    signInAccount,
    verifyToken
}