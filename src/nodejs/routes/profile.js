const express = require("express");
const router = express.Router();
const profileController = require("../controller/ProfileController")
router.post("/create-profile", profileController.createProfile)
router.get("/getByList", profileController.showProfileByArray)
router.put("/edit/:id", profileController.editProfile)
router.get("/:id", profileController.showProfileById)
module.exports = router