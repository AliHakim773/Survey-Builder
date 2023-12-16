const Role = require("../models/role.model")
const User = require("../models/user.model")

const register = async (rep, res) => {
    const { username, password, firstName, lastName } = rep.body
    if (!username || !password || !firstName || !lastName) {
        res.status(400).send({ message: "Something is missing" })
    }

    try {
        const role = await Role.findOne({ name: "user" })
        const user = await User.create({
            username,
            password,
            firstName,
            lastName,
            role: role._id,
        })

        res.status(200).send({ user })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

module.exports = {
    register,
}
