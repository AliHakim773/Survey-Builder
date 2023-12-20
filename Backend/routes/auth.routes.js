const express = require("express")
const { register, login, refresh } = require("../controllers/auth.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router()
const multer = require("multer")
const uploads = multer({ dest: "uploads/" })

router.post("/login", login)
router.post("/register", uploads.single("img"), register)
router.get("/", authMiddleware, refresh)

module.exports = router
