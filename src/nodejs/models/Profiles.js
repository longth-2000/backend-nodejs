const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Profiles = new Schema({
    Index: String,
    FullName: String,
    FullNameSearch:String,
    Age:Number,
    Sex: String,
    Level: String,
    LevelSearch:String,
    Image: String,
    Province:String,
    ProvinceSearch:String,
    District: String
})

Profiles.index({
    FullNameSearch: 'text', LevelSearch:'text', ProvinceSearch: 'text'
},
    {
        weigths:{
            FullNameSearch:1,
            LevelSearch:2,
            ProvinceSearch:3
        }

    }
)
module.exports = mongoose.model("profiles", Profiles)