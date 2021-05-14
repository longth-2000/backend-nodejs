const User = require("../models/Users")
var jwt = require('jsonwebtoken');
class LoginController {

    login(req, res) {
        User.findOne({ Email: req.body.email, Password: req.body.password }).then(function (result) {
            if (result !== null) {
                User.find({ Email: req.body.email }, function (error, result) {
                    if (error) console.log(error)
                    else {
                        process.index = result[0]
                        res.send({
                            status: true,
                            index: jwt.sign({
                                index: result[0]._id
                            }, "create-token")
                        })
                        console.log(result)

                    }
                })
            }
            else {
                res.send({
                    status: false,
                })
            }
        });


    }
}
module.exports = new LoginController
