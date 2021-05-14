const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    IndexHost:String,
    IndexClient:String
})
module.exports = mongoose.model("views",Schema)