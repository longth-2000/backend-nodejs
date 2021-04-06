var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://duongsau1211:dolananh@cluster0.zq7aa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var routes = require('./src/nodejs/routes/routes');
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 6000;
//ket noi router
app.use(routes);

app.get('/', (req, res) => {
    mongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var products = db.collection('users');
        products.find({}).toArray(function (err,data) {
            //nếu lỗi
            if (err) throw err;
            //nếu thành công
            res.send(data)
        });
    });
})
var portscanner = require('portscanner');


    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    });

