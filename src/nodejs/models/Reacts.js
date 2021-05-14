const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const React = new Schema({
    IndexHost:String,
    IndexClient:String
    
})
module.exports = mongoose.model('reacts',React)