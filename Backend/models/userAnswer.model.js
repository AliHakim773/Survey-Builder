const { default: mongoose } = require("mongoose")

const userAnswerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    servay: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survay",
        required: true,
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: true,
    },
})

const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema)

module.exports = UserAnswer
