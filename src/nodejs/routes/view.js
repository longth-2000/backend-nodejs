const express = require("express")
const router = express.Router()
const viewController = require("../controller/ViewController")
router.post("/:id", viewController.postView)
module.exports = router