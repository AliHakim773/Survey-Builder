const { default: mongoose } = require("mongoose")

const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})

const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer
