require("dotenv").config()
const express = require("express")
const { connectToMongoDB } = require("./configs/db.configs")

const app = express()
app.use(express.json())

app.listen(8000, () => {
    console.log("Server listining on PORT: ", 8000)
    connectToMongoDB()
})
