const User = require("../models/Users")
class LoginController {
    
    login(req, res) {
        User.findOne({ Email: req.body.email, Password: req.body.password }).then(function (result) {
            if (result !== null) {
                User.find({ Email: req.body.email }, function (error, result) {
                    if (error) console.log(error)
                    else {
                        process.index = result[0]
                        res.send(process.index)
                    }
                })
            }
            else {
                res.send({
                    status: false,
                    message: "Tài khoản đăng nhập không chính xác!!!"
                })
            }
        });
        
    }
}
module.exports = new LoginController
