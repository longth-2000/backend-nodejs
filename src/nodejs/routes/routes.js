var express = require('express')
var router = express.Router()
var mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://duongsau1211:dolananh@cluster0.zq7aa.mongodb.net/DB?retryWrites=true&w=majority";
router.post("/register", function (req, res) {

  var dataform = req.body;
  mongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    //use product collection
    var products = db.collection('users');
    var data = {
      email: dataform.email,
      password: dataform.password
    }
    if (data.email != null && data.password != null) {
      products.insertOne(data, function (err, res) {
        //neu xay ra loi
        if (err) throw err;
        //neu khong co loi
        console.log('Them thanh cong');
      });

    }
    else {
      console.log("Dữ liệu không hợp lệ")
    }
  });

  res.sendFile(path.join(__dirname + '/index.html'));
});
module.exports = router
