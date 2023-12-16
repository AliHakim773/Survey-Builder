const { default: mongoose } = require("mongoose")

const survaySchema = mongoose.Schema(
    {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        title: {
            type: String,
            required: true,
            minlength: 2,
        },
        description: {
            type: String,
            require: false,
        },
    },
    {
        timestamps: true,
    }
)

const Survay = mongoose.model("Survay", survaySchema)

module.exports = Survay
