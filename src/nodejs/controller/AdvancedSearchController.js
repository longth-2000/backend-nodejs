const profile = require("../models/Profiles")
const splitString = require("../template/splitString")
class AdvancedSearchController {
    search(req, res) {
       
         /*   profile.collection.dropIndexes(function (error, result) {
            if(error) console.log("error")
            else console.log("result")
         })    */
          profile.find({ $text: { $search: req.body.advancedSearch } }, function (error, result) {
            if (error) res.send(error)
            else res.send(result)
        })   
    
    }
}
module.exports = new AdvancedSearchController