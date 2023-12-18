const { default: mongoose } = require("mongoose")

const userAnswerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    servey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey",
        required: true,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
})

const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema)

module.exports = UserAnswer
