var fs = require("fs")
const User = require("../models/Users")
const registerValidation = require("../auth/registerValidation");
class RegisterController {
    register(req, res) {
        const { error } = registerValidation({
            Email: req.body.email,
            Username: req.body.username,
            Password: req.body.password
        });

        if (error) res.send(error)
        else {
            User.findOne({ Email: req.body.email }).then(function (result) {
                if (result == null) {
                    var accountUser = new User({
                        Email: req.body.email,
                        Password: req.body.password,
                        Username: req.body.username,
                    })
                    accountUser.save(function (error, user) {
                        if (error) console.log(error)
                        else {
                            process.loginIndex = user._id
                            fs.mkdir(`./src/nodejs/assets`, function (err) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log("New directory successfully created.")
                                }
                            }) 
                            res.send({
                                state: "successful",
                                message: "Register Successfully",
                                id:user._id
                            })
                        }
                    })

                }
                else res.send({
                    state: "existed",
                    message: "Account is existed"
                })
            });

        }
    }

}
module.exports = new RegisterController;