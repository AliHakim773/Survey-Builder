const { default: mongoose } = require("mongoose")
const QuestionType = require("../models/questionType.model")

const seedRoles = [
    new QuestionType({
        type: "input",
    }),
    new QuestionType({
        type: "checkbox",
    }),
    new QuestionType({
        type: "radio",
    }),
]

mongoose
    .connect("mongodb://127.0.0.1:27017/db_survays")
    .catch((err) => {
        console.log(err.stack)
        process.exit(1)
    })
    .then(() => {
        console.log("connected to db in development environment")
    })

const seedDb = async () => {
    await QuestionType.deleteMany({})
    await QuestionType.insertMany(seedRoles)
}

seedDb().then(() => {
    mongoose.connection.close()
})
