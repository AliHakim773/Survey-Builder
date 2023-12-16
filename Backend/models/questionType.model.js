const { default: mongoose } = require("mongoose")

const questionTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
})

const QuestionType = mongoose.model("QuestionType", questionTypeSchema)

module.exports = QuestionType
