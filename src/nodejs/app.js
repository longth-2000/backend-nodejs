const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require("path")
const server = app.listen(5000);
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'assets')))
const routers = require('./routes');
routers(app)
const database = require("../nodejs/config/database")
database.connect()
const io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data);
  });
});


