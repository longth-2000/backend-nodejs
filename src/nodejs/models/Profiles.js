const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("../models/Users")
const Profiles = new Schema ({
    Index:String,
    FirstName:String,
    LastName:String,
    Age:String,
    Sex:String,
    Level:String,
    Image:String,
    Province:String,
    District:String
})
module.exports= mongoose.model("profiles", Profiles)