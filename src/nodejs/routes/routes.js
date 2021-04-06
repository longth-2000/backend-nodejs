var express = require('express')
var router = express.Router();
const uri = "mongodb+srv://long:Dominic1234@newcluster.c5ce2.mongodb.net/database1?retryWrites=true&w=majority";
const {MongoClient} = require('mongodb');

let db;
const databaseName = "database1";
MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  db = client.db(databaseName);
});
router.post("/register", function (req, res) {

    var dataform = req.body;
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
    });}
    else {
      console.log("Dữ liệu không hợp lệ")
    }
  });
module.exports = router
