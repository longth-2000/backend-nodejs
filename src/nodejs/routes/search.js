const express = require("express")
const router = express.Router()
const searchController = require("../controller/SearchController")
const advancedSearch = require("../controller/AdvancedSearchController")
router.post("/",searchController.search)
router.post("/advanced",advancedSearch.search)
module.exports = router