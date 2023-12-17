const Question = require("../models/question.model")
const Survey = require("../models/servey.model")
const questionType = require("../models/questionType.model")
const Answer = require("../models/answer.model")

const addSurvey = async (rep, res) => {
    const { title, description, questions } = rep.body
    if (!title || !questions)
        res.status(400).send({ message: "Missing Fields" })

    try {
        const survey = await Survey.create({ title, description })
        const types = await questionType.find()

        questions.map(async (question) => {
            let type

            if (!question.content || !question.type)
                res.status(400).send({ message: "Missing Fields" })

            if (question.type == "input") {
                type = types[0]._id
            } else if (question.type == "checkbox") {
                type = types[1]._id
            } else if (question.type == "radio") {
                type = types[2]._id
            } else {
                res.status(400).send({ message: "Incorrect question type" })
            }

            const q = await Question.create({
                content: question.content,
                survey: survey._id,
                type,
            })
            // console.log(q._id)
            await Survey.findByIdAndUpdate(
                survey._id,
                {
                    $push: {
                        questions: q._id,
                    },
                },
                { new: true, useFindAndModify: false }
            )

            question.answers.map(async (answer) => {
                const ans = await Answer.create({
                    content: answer,
                    question: q._id,
                })

                await Question.findByIdAndUpdate(
                    q._id,
                    {
                        $push: {
                            answers: ans._id,
                        },
                    },
                    { new: true, useFindAndModify: false }
                )
            })
        })

        res.status(200).send({ survey })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

const getAllSurveys = async (rep, res) => {
    try {
        const surveys = await Survey.find().populate()
        res.status(200).send({ surveys })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

const getSurveyById = async (rep, res) => {
    const { id } = rep.params
    if (!id) res.status(400).send({ message: "missing id" })
    try {
        const survey = await Survey.find({ _id: id })
            .populate({
                path: "questions",
                populate: [
                    { path: "type" },
                    {
                        path: "answers",
                    },
                ],
            })
            .select("-question._id")
        res.status(200).send({ survey })
    } catch (e) {
        res.status(500).send({ error: e, message: "id not found", id })
    }
}

const deleteSurvey = async (rep, res) => {
    const { id } = rep.params
    if (!id) res.status(400).send({ message: "missing id" })

    try {
        await Survey.deleteOne({ _id: id })
        res.status(200).send({ message: "Survey deleted successfuly" })
    } catch (e) {
        res.status(500).send({ error: e })
    }
}

module.exports = {
    getAllSurveys,
    addSurvey,
    getSurveyById,
    deleteSurvey,
}
