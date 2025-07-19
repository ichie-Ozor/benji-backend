const Agenda = require("agenda");
// const { lockLimit } = require("agenda/dist/agenda/lock-limit");
// const { maxConcurrency } = require("agenda/dist/agenda/max-concurrency");
const dotenv = require('dotenv')

dotenv.config()
const mongoDBConection = process.env.MONGODB_URI;

const agenda = new Agenda({
    db: { address: mongoDBConection, collection: 'agendaJobs' },
    lockLimit: 50,
    maxConcurrency: 10,
    // timezone: 'Africa/Lagos',
    autoReconnect: true,
    defaultLockLifetime: 60000
})

// Error handling
agenda.on('fail', async (err, job) => {
    console.error(`Job ${job.attrs.name} failed with error: ${err.message}`);
    if (job.attrs.failCount < 3) {
        await job.retry();
    } else {
        await job.fail("Max retries reached");
    }
});

agenda.on('complete', (job) => {
    console.log(`Job ${job.attrs.name} finished`);
});

module.exports = agenda;