const express = require("express")
const {
    addSurvey,
    getAllSurveys,
    getSurveyById,
} = require("../controllers/survey.controller")
const router = express.Router()

router.post("/", addSurvey)
router.get("/", getAllSurveys)
router.get("/:id", getSurveyById)

module.exports = router
