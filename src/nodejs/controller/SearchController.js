const profile = require("../models/Profiles")
var levelList = []
class SearchController {
    search(req, res) {
      /*  if (req.body.levelOption == null) {
            levelList = ["THCS", "THPT", "Đại học", "Thạc sĩ"]
        }
        else {
            levelList.push(req.body.levelOption)
        }  */
        const requestList = Object.getOwnPropertyNames(req.body)
        profile.find({
            Level: { $in: levelList },
            Sex: req.body.sexOption,
            Age: { $gte: req.body.ageOptionMin, $lte: req.body.ageOptionMax }
        }, function (err, result) {
            if (err) res.send("error")
            else {
                res.send(result);
                levelList.splice(0, levelList.length)
            }
        })
        console.log(levelList)
        console.log(req.body)
    }
}
module.exports = new SearchController