const JWT = require('jsonwebtoken');


const createAssessToken = async (email) => {
    const assessToken = await JWT.sign(
        { email },
        process.env.JWT_SECRET,
        {
            expiresIn: "3h"
        }
    );
    return assessToken
}

const createRefreshToken = async (email) => {
    const refreshToken = await JWT.sign(
        { email },
        process.env.REFRESH_SECRET,
        {
            expiresIn: "15m"
        }
    )
    return refreshToken
}

const verifyTokenService = async (token) => {
    if (!token) {
        return false
    } else {
        const decode = await JWT.verify(token, process.env.JWT_SECRET)
        return decode
    }
}

module.exports = {
    createAssessToken,
    createRefreshToken,
    verifyTokenService
}