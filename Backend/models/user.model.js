const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 20,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        firstName: {
            type: String,
            required: true,
            minlength: 2,
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true,
        },
        takenSurveys: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Survey",
            },
        ],
    },
    {
        timestamps: true,
    }
)

userSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        console.log("Error in Hasing Password")
        next(error)
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User
