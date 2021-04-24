const profile = require("../models/Profiles")
class AdvancedSearchController{
     search(req,res){
      profile.find({FirstName:{$regex:req.body.advancedSearch}},function(error,result) {
            if(error) res.send(error)
            else res.send(result)
        }) 
       /*  res.send(req.body.advancedSearch) */
    } 
    
}
module.exports = new AdvancedSearchController