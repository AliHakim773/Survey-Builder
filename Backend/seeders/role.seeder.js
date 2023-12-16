const { default: mongoose } = require("mongoose")
const Role = require("../models/role.model")

const seedRoles = [
    new Role({
        name: "admin",
    }),
    new Role({
        name: "user",
    }),
]

mongoose
    .connect("mongodb://127.0.0.1:27017/db_survays")
    .catch((err) => {
        console.log(err.stack)
        process.exit(1)
    })
    .then(() => {
        console.log("connected to db in development environment")
    })

const seedDb = async () => {
    await Role.deleteMany({})
    await Role.insertMany(seedRoles)
}

seedDb().then(() => {
    mongoose.connection.close()
})
