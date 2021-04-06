var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
var mongoClient = require('mongodb').MongoClient;
var routes = require('./src/nodejs/routes/routes');
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 6000;
//ket noi router
app.use(routes);
/*
app.get('/', (req, res) => {
    mongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function(err, db) {
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

*/
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/index.html'));
})
var portscanner = require('portscanner');


    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:5000`)
    });

