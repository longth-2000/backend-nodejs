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

        const optionList = ["levelOption", "sexOption", "ageOptionMin", "ageOptionMax", "provinceOption"]
        optionList.forEach((items) => {
            if (req.body[items] == "No option" || requestList.includes(items) == false) {
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
        console.log(optionDataList.sexOption)
        console.log(ageMax)

        profile.find({
            Level: { $in: optionDataList.levelOption },
            Sex: { $in: optionDataList.sexOption },
            Age: { $gte: ageMin, $lte: ageMax },
            Province: { $in: optionDataList.provinceOption },
            Index: { $nin: req.body.index }
        }, function (err, result) {
            if (err) res.send("error")
            else {
                res.send(result);
                optionList.forEach((items) => {
                    optionDataList[items].splice(0, optionDataList[items].length)
                })
            }
        })
        console.log(req.body)

    }
}
module.exports = new SearchController