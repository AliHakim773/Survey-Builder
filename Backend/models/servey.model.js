const { default: mongoose } = require("mongoose")

const surveySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 2,
        },
        description: {
            type: String,
            require: false,
        },
        questions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
            },
        ],
    },
    {
        timestamps: true,
    }
)

const Survey = mongoose.model("Survey", surveySchema)

module.exports = Survey
