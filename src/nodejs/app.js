const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require("path")
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'assets')))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const routers = require('./routes');
routers(app)

const database = require("../nodejs/config/database")
database.connect()
const io = require('socket.io')(server);
const crypto = require("crypto");
const randomId = () => crypto.randomBytes(8).toString("hex");
var users = []
io.sockets.on('connection', function (socket) {
  socket.on("online", data => {
    if (users.length == 0 || !users.some(user => user.userID == data.userID)) {
      users.push({
        userID: data.userID,
        socketID: socket.id
      })
    }
    io.sockets.emit("client_online", users)
  })
  socket.on("disconnect", data => {
    users = users.filter(user => user.socketID != socket.id)
    io.sockets.emit("client_online", users)
  })
  socket.on("offline", data => {
    users = users.filter(user => user.userID != data)
    io.sockets.emit("client_online", users)
  })
  io.sockets.emit("client_online", users)
  socket.on("YOUR_ROOM", data => {
    socket.join(data)
  })
  socket.on("SEND_MESSAGE_TO_FRIEND", data => {
    socket.to(data.room.split('-').reverse().join('-')).emit("MESSAGE_TO_CLIENT", data)
    console.log(data)
  })
  socket.on("SEND_MESSAGE_TO_HOST", data => {
    io.to(socket.id).emit("MESSAGE_TO_HOST", data)
  })
});

