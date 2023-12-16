const { default: mongoose } = require("mongoose")

const questionSchema = mongoose.Schema({
    servey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Servey",
        required: "true",
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionType",
        required: "true",
    },
    content: {
        type: String,
        required: true,
        minlength: 4,
    },
    answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer",
        },
    ],
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question
