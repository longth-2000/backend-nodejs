const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Chat = new Schema({
    from: {
        index: String,
        name: String,
        image: String
    },
    to: {
        index: String,
        name: String,
        image: String
    },
    timestamp: {
        year: Number,
        month: Number,
        day: Number,
        hour:  Number,
        minute: Number,
        second: Number,
        millisecond: Number
    },
    content: String,
})
module.exports = mongoose.model("messages", Chat)