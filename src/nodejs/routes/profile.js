const express = require("express");
const router = express.Router();
const profileController = require("../controller/ProfileController")
router.post("/create-profile",profileController.createProfile)
router.get("/:id",profileController.showProfile)
  module.exports = router