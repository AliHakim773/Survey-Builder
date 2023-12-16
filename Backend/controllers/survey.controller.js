const Survey = require("../models/servey.model")

const addSurvey = async (rep, res) => {
    const { title, description } = rep.body
    if (!title) res.status(400).send({ message: "Missing Fields" })

    try {
        const survey = await Survey.create({ title, description })
        await survey.save()

        res.status(200).send({ survey })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

module.exports = {
    addSurvey,
}
