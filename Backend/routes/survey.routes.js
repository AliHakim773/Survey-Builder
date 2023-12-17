const express = require("express")
const {
    addSurvey,
    getAllSurveys,
    getSurveyById,
    deleteSurvey,
} = require("../controllers/survey.controller")
const router = express.Router()

router.post("/", addSurvey)
router.get("/", getAllSurveys)
router.get("/:id", getSurveyById)
router.delete("/:id", deleteSurvey)

module.exports = router
