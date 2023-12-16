const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        trim: true,
    },
})

const Role = mongoose.model("Role", roleSchema)

module.exports = Role
