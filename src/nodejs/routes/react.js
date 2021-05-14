const express = require("express");
const router = express.Router();
const reactController = require("../controller/ReactionController")
router.post('/', reactController.postReact)
router.get('/viewed-profile/:id',reactController.showLikedProfile)
router.delete('/delete', reactController.deleteProfile)
router.get('/isviewed-profile/:id',reactController.showisLikedProfile)
module.exports = router