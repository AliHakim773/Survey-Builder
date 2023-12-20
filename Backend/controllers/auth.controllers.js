const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Role = require("../models/role.model")
const User = require("../models/user.model")

const register = async (rep, res) => {
    const { username, password, firstName, lastName, email } = rep.body
    if (!username || !password || !firstName || !lastName || !email) {
        res.status(400).send({ message: "Something is missing" })
    }

    try {
        const role = await Role.findOne({ name: "user" })
        const user = await User.create({
            username,
            password,
            firstName,
            lastName,
            email,
            role: role._id,
        })

        const token = jwt.sign(
            {
                username,
                password,
                firstName,
                lastName,
                email,
                role: role._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "2 days" }
        )

        res.status(200).send({ user, token })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    // check if user is available in DB
    const user = await User.findOne({ username })
    if (!user) res.status(400).send({ message: "Invalid username/password" })

    // check if password is correct
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword)
        res.status(400).send({ message: "Invalid username/password" })

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

    // generate JWT token
    const token = jwt.sign(
        {
            ...userDetails,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2 days" }
    )

    res.status(200).send({
        user: userDetails,
        token,
    })
}

const refresh = async (req, res) => {
    // check if user is available in DB
    const user = await User.findOne({ username: req.user.username })
    if (!user) res.status(400).send({ message: "Invalid username/password" })

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

    // generate JWT token
    const token = jwt.sign(
        {
            ...userDetails,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2 days" }
    )

    res.status(200).send({
        user: userDetails,
        token,
    })
}

module.exports = {
    register,
    login,
    refresh,
}
