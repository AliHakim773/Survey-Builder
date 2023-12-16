const { default: mongoose } = require("mongoose")
const User = require("../models/user.model")
const Role = require("../models/role.model")

const seedDB = async () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/db_survays")
        .catch((err) => {
            console.log(err.stack)
            process.exit(1)
        })
        .then(() => {
            console.log("connected to db in development environment")
        })

    const adminRole = await Role.findOne({ name: "admin" })

    console.log(adminRole._id)

    const seedAdmin = [
        new User({
            username: "admin",
            password: "password",
            firstName: "Ali",
            lastName: "Hakim",
            age: 23,
            role_id: adminRole._id,
        }),
    ]

    const seedDb = async () => {
        await User.deleteMany({})
        await User.insertMany(seedAdmin)
    }

    seedDb().then(() => {
        mongoose.connection.close()
    })
}

seedDB()
