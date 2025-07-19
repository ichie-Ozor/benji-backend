const Account = require('./RegistrationModal');
const bycryptjs = require('bcryptjs');

const createAccountService = async (body) => {
    const auth = new Account(body)
    const salt = bycryptjs.genSaltSync(10)
    const hashedPassword = bycryptjs.hashSync(body.password, salt)
    auth.password = hashedPassword
    await auth.save()
        .then(result => {
            console.log(result, "from account service")
        })
    return auth
}

const accountExistService = async (email) => {
    const findAccount = await Account.findOne({ email })
    if (!findAccount || !findAccount.email) {
        return false
    } else {
        return true
    }
}

const getAllAccountService = async () => {
    const allAccount = Account.find()
    return allAccount
}

const getAccountByemailService = async (value) => {
    const findAccount = await Account.findOne({ email: value })
    return findAccount
}

/////////////update account
const editAccountService = async (id, data) => {
    const updateAccount = await Account.findByIdAndUpdate(id, data)
    return updateAccount
}

/////////////////Delete account
const deleteAccountService = async (id) => {
    const deleteAccount = await Account.findByIdAndDelete(id)
    return deleteAccount
}

module.exports = {
    createAccountService,
    accountExistService,
    getAllAccountService,
    getAccountByemailService,
    editAccountService,
    deleteAccountService
}