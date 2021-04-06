var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const uri = "mongodb+srv://long:Dominic1234@newcluster.c5ce2.mongodb.net/database1?retryWrites=true&w=majority";
const {MongoClient} = require('mongodb')
var routes = require('./src/nodejs/routes/routes');
app.use(bodyParser.json());
app.use(cors());
const PORT =3000;
//ket noi router
app.use(routes);

let db;
const databaseName = "database1";
MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  db = client.db(databaseName);
});
 app.get("/", (req, res) => {
        var products = db.collection('users');
        products.find({}).toArray(function (err,data) {
            //nếu lỗi
            if (err) throw err;
            //nếu thành công
            res.send(data)
        });
 })
app.listen(PORT, () => {
    console.log(`123456 http://localhost:${PORT}`)
});