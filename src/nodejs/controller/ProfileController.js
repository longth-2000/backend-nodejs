const Profiles = require("../models/Profiles")
const User = require("../models/Users")
const profileValidation = require("../auth/profileValidation")
const splitString = require("../template/splitString")
class ProfileController {
    createProfile(req, res) {
       const { error } = profileValidation({
            Fullname: req.body.fullname,
            Age: req.body.age
        });
        if (error) res.send(error)
        else {
            var profile = new Profiles({
                FullName: req.body.fullname,
                FullNameSearch:splitString(req.body.fullname),
                Age: req.body.age,
                Sex:req.body.sex,
                Level: req.body.level,
                LevelSearch:splitString(req.body.level),
                Province: req.body.provinceOption,
                ProvinceSearch:splitString(req.body.provinceOption),
                District: req.body.districtOption,
                Image: req.file.filename,
                Index: process.index._id    
            })
            profile.save(function (error, user) {
                if (error) console.log(error)
                else res.send({
                    state: true,
                    message: "Create profiles sucessfully"
                })
            })
          
         }  
    /*      res.send(req.body) */     
    }
    showProfile(req, res) {
       Profiles.find({Index:req.params.id}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });   
    }
    
}
module.exports = new ProfileController
