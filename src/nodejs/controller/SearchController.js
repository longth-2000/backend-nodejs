const profile = require("../models/Profiles")
const axios = require("axios")
const province = require("../template/getProvince")
const splitString = require("../template/splitString")

var optionDataList = {
    "levelOption": [],
    "sexOption": [],
    "provinceOption": [],
    "ageOptionMin": [],
    "ageOptionMax": []
}
var ageMin = ""
var ageMax = ""
class SearchController {
    search(req, res) {
        const requestList = Object.getOwnPropertyNames(req.body)
        console.log(requestList)
        const optionList = ["levelOption", "sexOption", "ageOptionMin", "ageOptionMax", "provinceOption"]
        optionList.forEach((items) => {
            if (requestList.includes(items) == false) {
                switch (items) {
                    case "levelOption": {
                        optionDataList.levelOption = ["THCS", "THPT", "Đại học", "Thạc sĩ"]
                        break;
                    }
                    case "sexOption": {
                        optionDataList.sexOption = ["Nam", "Nữ"]
                        break;
                    }
                    case "ageOptionMin": {
                        ageMin = "18"
                        break;
                    }
                    case "ageOptionMax": {
                        ageMax = "60"
                        break;
                    }
                    case "provinceOption": {
                        process.provinceList.LtsItem.forEach((items) => {
                              optionDataList.provinceOption.push(items.Title)
                        })
                    }
                }
            }
            else {
                optionDataList[items] = []
                optionDataList[items].push(req.body[items])
            }
        })
        console.log(optionDataList.levelOption)
        console.log(optionDataList.provinceOption)
        profile.find({
            Level: { $in: optionDataList.levelOption },
            Sex: { $in: optionDataList.sexOption },
            Age: { $gte: ageMin, $lte: ageMax },
            Province: { $in: optionDataList.provinceOption }
        }, function (err, result) {
            if (err) res.send("error")
            else {
                res.send(result);
                optionList.forEach((items) => {
             optionDataList[items].splice(0, optionDataList[items].length) 
                })
            }
        })
    }
}
module.exports = new SearchController