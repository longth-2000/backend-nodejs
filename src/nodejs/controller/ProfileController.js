const Profiles = require("../models/Profiles")
const User = require("../models/Users")
const profileValidation = require("../auth/profileValidation")
const splitString = require("../template/splitString");
class ProfileController {
    createProfile(req, res) {
        const { error } = profileValidation({
            Fullname: req.body.FullName,
            Province: req.body.Province,
            District:req.body.District,
            Sex:req.body.Sex,
            Level:req.body.Level
        });
        if (error) res.send(error)
        else {
            var profile = new Profiles({
                FullName: req.body.FullName,
                FullNameSearch: splitString(req.body.FullName),
                Age: req.body.Age,
                Sex: req.body.Sex,
                Level: req.body.Level,
                LevelSearch: splitString(req.body.Level),
                Province: req.body.Province,
                ProvinceSearch: splitString(req.body.Province),
                District: req.body.District,
                Image: req.file.filename,
                Index: req.body.cookie
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
    showProfileById(req, res) {
        Profiles.find({ Index: req.params.id }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
    showProfile(req, res) {
        Profiles.find({}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
    showProfileByArray(req, res) {
        Profiles.find({}, (error, result) => {
            if (error) res.send(error)
            else res.send(result)
        })
    }
    editProfile(req, res) {
        Profiles.updateOne({ Index: req.params.id }, {
            FullName: req.body.data.FullName,
            FullNameSearch: splitString(req.body.data.FullName),
            Age: req.body.Age,
            Sex: req.body.Sex,
            Level: req.body.Level,
            LevelSearch: splitString(req.body.Level),
            Province: req.body.Province,
            ProvinceSearch: splitString(req.body.Province),
            District: req.body.District,
        }).then((result, error) => {
            if (error) res.send("error")
            else res.send("Sucessfully")
        })
    }
    changeAvatar(req, res) {
        console.log(req.file.filename)
        Profiles.updateOne({ Index: req.params.id }, {
            Image: req.file.filename
        }).then((result, error) => {
            if (error) res.send(error)
            else res.send(req.file.filename)
        })
    }
}
module.exports = new ProfileController
