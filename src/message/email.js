const nodemailer = require("nodemailer")

const sendMail = async (email, subject, text) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        await transport.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            html: text
        })
        console.log(`Email sent Suceessfully to ${email}`)
    } catch (error) {
        console.log(error, "Email not sent")
    }
}

module.exports = sendMail;