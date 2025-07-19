const Express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js")
const accountRoute = require('./Authentication/route.js')
const authRoute = require('./Auth/AuthRoute.js')

dotenv.config();

const corsOptions = {
    Origin: 'https://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

const app = Express();
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URI;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors(corsOptions))


app.use("/account", accountRoute)
app.use("/auth", authRoute)



app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome sms alert app"
    });
});

app.listen(PORT, async () => {
    try {
        await connectDB(MONGODB_URL);
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = { app }