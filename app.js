var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
const uri = "mongodb+srv://duongsau1211:dolananh@cluster0.zq7aa.mongodb.net/user";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri);
var routes = require('./src/nodejs/routes/routes');
app.use(bodyParser.json());
app.use(cors());
const PORT =3000;
//ket noi router
app.use(routes);

app.get('/', (req, res) => {
   // res.render(__dirname+'/index.html')

    console.log("123456")
    /*
    mongoClient.connect(uri, function(err, db) {
        if (err) {
            console.log("132")
            console.log(err)
        };
        var products = db.collection('users');
        products.find({}).toArray(function (err,data) {
            //nếu lỗi
            if (err) {
                console.log(err)
            };
            //nếu thành công
            res.send(data)
            //res.render(__dirname+'/index.html')
        });

    });

     */
    //res.render('<div>abc</div>')

    client.connect().then(()=>{console.log("aaaaa")});
        //const product = client.collection("users");
        /*
        product.find({}).toArray(function (err,data) {
            //nếu lỗi
            if (err) {
                console.log(err)
            };
            //nếu thành công
            res.send(data)

        });


         */
    //res.render(__dirname+'/index.html')
        client.close();
})
    app.listen(PORT, () => {
        console.log(`123456 http://localhost:${PORT}`)
    });



