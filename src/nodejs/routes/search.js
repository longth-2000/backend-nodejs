const express = require("express")
const router = express.Router()
const searchController = require("../controller/SearchController")
router.post("/",searchController.search)
module.exports = router