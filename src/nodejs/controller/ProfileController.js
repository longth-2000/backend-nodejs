const Profiles = require("../models/Profiles")
const profileValidation = require("../auth/profileValidation")
class ProfileController {
    createProfile(req, res) {
        const { error } = profileValidation({
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Age: req.body.age
        });
        if (error) res.send(error)
        else {
            var profile = new Profiles({
                FirstName: req.body.firstname,
                LastName: req.body.lastname,
                Age: req.body.age,
                Sex:req.body.sex,
                Level: req.body.level,
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
