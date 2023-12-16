const { default: mongoose } = require("mongoose")

const questionSchema = mongoose.Schema({
    servay_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servay",
        required: "true",
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType",
        required: "true",
    },
    question: {
        type: String,
        required: true,
        minlength: 4,
    },
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question
