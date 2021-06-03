const express = require("express")
const router = express.Router()
const chatController = require("../controller/ChatController")
router.post("/",chatController.insertContent) 
router.get("/display", chatController.displayContent)
router.get("/display/:id",chatController.displayContentById)
module.exports = router