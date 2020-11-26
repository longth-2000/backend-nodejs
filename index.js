const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
const http = require('http');
const config = {
    apiKey: "AIzaSyC-p0KqYoqvSsf6jDZJxTNIIyCIj-QRJDg",
    authDomain: "web200-4957a.firebaseapp.com",
    databaseURL: "https://web200-4957a.firebaseio.com",
    projectId: "web200-4957a",
    storageBucket: "web200-4957a.appspot.com",
    messagingSenderId: "786330267222",
    appId: "1:786330267222:web:6a7efbd96873baf20cd5f7",
    measurementId: "G-2LX744EQQK"
};
const server = http.createServer(function (req, res) {
    console.log(`${req.method} request received at ${req.url}`);
    if (req.url === '/json') {
        res.setHeader('Content-Type', 'application/json');
        let newList=[];
        res.statusCode = 200; // 200 = OK
        if (!firebase.apps.length) {
            try {
                firebase.initializeApp(config)
            } catch (err) {
                console.log(err)
            }
        }
        let db=firebase.database().ref('/post');
        db.on('value',(datasnap)=>{
            let news=datasnap.val();
            console.log(news);
            newList=Object.entries(news).reverse();
            res.write(JSON.stringify(newList));
            res.end();
        });

    }
});

server.listen(3001, function () {
    console.log("Listening on port http://localhost:3000");
});
