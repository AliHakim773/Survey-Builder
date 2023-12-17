require("dotenv").config()
const express = require("express")
const { connectToMongoDB } = require("./configs/db.configs")
const authMiddleware = require("./middlewares/auth.middleware")

const app = express()
app.use(express.json())

//auth routes
const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

//survey rutes
const surveyRoutes = require("./routes/survey.routes")
app.use("/survey", authMiddleware, surveyRoutes)

app.listen(8000, () => {
    console.log("Server listining on PORT: ", 8000)
    connectToMongoDB()
})
