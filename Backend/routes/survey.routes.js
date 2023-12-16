const express = require("express")
const { addSurvey } = require("../controllers/survey.controller")
const router = express.Router()

router.post("/", addSurvey)

module.exports = router
