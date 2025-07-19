const { sendSMS } = require("./src/message/sms")
const { getEveryCustomerService } = require("./src/input/Customer/service")
const { getEventService, getEveryEventService } = require("./src/input/Event/eventService")
const agenda = require('./src/config/agenda')
const moment = require("moment")

const today = moment().startOf('day')
agenda.define('textAlert', async () => {
    const birthday = []
    const wedanniversary = []
    console.log("see amm")
    const allCustomers = await getEveryCustomerService()
    for (let i = 0; i < allCustomers.length; i++) {

        // const formattedBirthday = moment.utc(allCustomers[i].birthday).format("MM-DD")
        const formattedBirthday = moment.utc(allCustomers[i].birthday).startOf("day")
        // const formattedWedAnniversary = moment.utc(allCustomers[i].wedanniversary).format("MM-DD")
        const formattedWedAnniversary = moment.utc(allCustomers[i].wedanniversary).startOf("day")

        // if (today === formattedBirthday) {
        if (today.isSame(formattedBirthday, 'day')) {
            birthday.push(allCustomers[i].number)
        }

        if (today.isSame(formattedWedAnniversary, 'day')) {
            wedanniversary.push(allCustomers[i].number);
        }
    }

    //////////////////Birthdays
    const birthdayEvent = await getEventService("birthday")
    console.log(birthday, "seeeeee", wedanniversary, "ammmmmm", birthdayEvent)

    try {
        for (const phoneNumber of birthday) {
            sendSMS("Zeek Solar", "+234" + phoneNumber, birthdayEvent.message)
        }
    } catch (error) {
        console.error("Failed to send sms", error)
    }

    /////////////////////Anniversary
    const anniversaryEvent = await getEventService("wedanniversary")

    try {
        for (const phoneNumber of wedanniversary)
            sendSMS("Zeek Solar", "+234" + phoneNumber, anniversaryEvent.message)

    } catch (error) {
        console.error("Failed to send anniversary sms", error)
    }
    ///////////////////////Celebration
    try {
        const event = (await getEveryEventService()).filter((item) => item.event !== "birthday" && item.event !== "wedanniversary" && moment.utc(item.date).format("MM-DD") === today)
        if (event.length > 0) {
            const allCustomers = (await getEveryCustomerService()).filter((item) => item.religion === event[0].religion)
            console.log(event, "and", allCustomers)
            await Promise.all(
                allCustomers.map((t) => sendSMS("Zeek Solar", "+234" + t.number, event.message))
            )
        }
    } catch (err) {
        console.log(err, "error from celebration")
    }
})

const textAlerts = async () => {
    await agenda.start()
    await agenda.cancel({ name: 'textAlert' });
    await agenda.every('0 0 * * *', 'textAlert')
    // await agenda.cancel({ name: 'celebration' });
    // await agenda.every('0 0 * * *', 'celebration');
    // await agenda.every('24 hours', 'celebration')
    await agenda.every('3 minutes', 'textAlert');
}
textAlerts()