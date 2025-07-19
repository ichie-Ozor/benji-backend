const {
    createAccountService,
    accountExistService,
    getAllAccountService,
    getAccountByemailService,
    editAccountService,
    deleteAccountService
} = require('./RegistrationService.js')
const { createAssessToken, createRefreshToken } = require('../Auth/AuthService.js')


const createAccount = async (req, res) => {
    const { name, password, email } = req.body
    try {
        if (!name || !email || !password) {
            return res.json({
                status: "Failed",
                message: "Incomplete credential, Please complete the input"
            })
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            res.json({
                status: "Failed",
                message: "Invalid email entered"
            })
        } else if (!/^[a-zA-Z ]*$/.test(name)) {
            res.json({
                status: "Failed",
                message: "Invalid name entered"
            })
        } else if (password.length < 5) {
            res.json({
                status: "Failed",
                message: "Password is too small"
            })
        }
        const accountExist = await accountExistService(email)
        if (accountExist) {
            return res.json({
                status: "Failed",
                message: "An account with this email already exist"
            })
        }
        await createAccountService(req.body)
        const assessToken = await createAssessToken(email)
        return res.json({
            status: "Success",
            message: `Account with the name ${name} has been created sucessfully`,
            assessToken
        })
    } catch (err) {
        res.json({
            status: "failed",
            message: "Internal server error"
        })
    }
}

const getOneAcountController = async (req, res) => {
    const { email } = req.query
    try {
        const account = await getAccountByemailService(email)
        if (!account) {
            return res.status(400).json({
                status: "Failed",
                message: `Account with the email ${email} do not exist`,
                account,
            })
        }
        res.status(200).json({
            status: "Success",
            message: "All account fetched successfully",
            account,
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Internal server error"
        })
    }
}

const getAllAcountController = async (req, res) => {
    try {
        const allAccount = await getAllAccountService()
        res.json({
            status: "Success",
            message: "All account fetched successfully",
            allAccount,
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: "Internal server error"
        })
    }
}

module.exports = {
    createAccount,
    getAllAcountController,
    getOneAcountController
}