const express = require("express")
const { addSurvey, getAllSurveys } = require("../controllers/survey.controller")
const router = express.Router()

router.post("/", addSurvey)
router.get("/", getAllSurveys)

module.exports = router
