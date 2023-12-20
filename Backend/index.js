require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectToMongoDB } = require("./configs/db.configs")
const authMiddleware = require("./middlewares/auth.middleware")

const app = express()
app.use(express.json())

app.use(cors())
//auth routes
const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

//survey routes
const surveyRoutes = require("./routes/survey.routes")
app.use("/survey", authMiddleware, surveyRoutes)

app.listen(8000, () => {
    console.log("Server listining on PORT: ", 8000)
    connectToMongoDB()
})
