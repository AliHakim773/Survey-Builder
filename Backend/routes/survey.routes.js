const express = require("express")

const {
    addSurvey,
    getAllSurveys,
    getSurveyById,
    deleteSurvey,
    addUserAswers,
    deleteUserAnswers,
} = require("../controllers/survey.controller")
const router = express.Router()

router.post("/", addSurvey)
router.get("/", getAllSurveys)
router.get("/:id", getSurveyById)
router.delete("/:id", deleteSurvey)
router.post("/answers", addUserAswers)
router.delete("/answers/:serveyId", deleteUserAnswers)

module.exports = router
