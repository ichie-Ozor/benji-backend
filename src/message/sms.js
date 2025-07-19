const axios = require('axios')
// const twilio = require("twilio")


//this is for bulk SM, it does not deliver on time
// const sendSMS = async (token, from, to, body) => {
//     try {
//         axios({
//             method: "POST",
//             url: `https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${token}&from=${from}&to=${to}&body=${body}`,
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             }
//         }).then((response) => {
//             console.log(response.data, "sms")
//             return response
//         })
//     } catch (err) {
//         throw new Error(err.message)
//     }
// }

//this is for multitext, it delivers on time
// sTAHnrtUaWXodMDlInPfjbmAieUyazWVOVJ7So2d7UoeyhTn91giTmSC5aJN
// const sendSMS = async (token, from, to, data) => {
//     console.log(from, " Sms function")
//     try {
//         const response = await axios({
//             method: "POST",
//             url: `https://app.multitexter.com/v2/app/sendsms`,
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Accept": "application/json",
//                 // "Content-Type": "application/json"
//             },
//             body: {
//                 "sender_name": from,
//                 "message": data,
//                 "recipients": to,
//             }
//         })
//         console.log(response, "sms")
//         return response.data

//     } catch (err) {
//         console.error("Error sending sms", err.message)
//         throw new Error(err.message)
//     }
// }

const sendSms = async () => {
    const url = 'https://app.multitexter.com/v2/app/sendsms';
    const data = new URLSearchParams();
    data.append('sender_name', 'Zeek Solar');
    data.append('message', 'Welcome to Zeek solar, were you are guaranteed the very best solar and solar panel equipments for your electricity and home use. Zeek solar is your next and best stop shop for solar equipments.');
    data.append('recipients', '+2348027262441');

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer sTAHnrtUaWXodMDlInPfjbmAieUyazWVOVJ7So2d7UoeyhTn91giTmSC5aJN',
            },
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const SendSMS = async (from, to, message) => {
    const url = 'https://app.multitexter.com/v2/app/sendsms';
    const token = "sTAHnrtUaWXodMDlInPfjbmAieUyazWVOVJ7So2d7UoeyhTn91giTmSC5aJN"
    const data = new URLSearchParams();
    data.append('sender_name', from);
    data.append('message', message);
    data.append('recipients', to);

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}


const sendSMS = async (from, to, message) => {   //termii API
    const url = "https://api.ng.termii.com/api/sms/send"; // Updated Termii endpoint
    const apiKey = process.env.TERMII_API_KEY; // Use environment variables
    const secretKey = process.env.TERMII_SECRET_KEY; // Use environment variables

    try {
        const response = await axios.post(url, {
            to: to,
            from: from,
            sms: message,
            type: "plain",
            channel: "generic",
            api_key: apiKey
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(`SMS sent to ${to}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Failed to send SMS to ${to}:`, error.response?.data || error.message);
        throw error; // Re-throw to handle in calling function
    }
};

// Download the helper library from https://www.twilio.com/docs/node/install
; // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// async function createMessage() {
//     const message = await client.messages.create({
//         body: "This is the ship that made the Kessel Run in fourteen parsecs?",
//         from: "+15017122661",
//         to: "+15558675310",
//     });

//     console.log(message.body);
// }

// createMessage();

module.exports = { sendSMS, SendSMS }