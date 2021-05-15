const express = require("express");
const router = express.Router();
const reactController = require("../controller/ReactionController")
router.post('/', reactController.postReact)
router.get('/liked/:id',reactController.showLikedProfile)
router.delete('/delete', reactController.deleteProfile)
router.get('/isliked/:id',reactController.showisLikedProfile)
module.exports = router