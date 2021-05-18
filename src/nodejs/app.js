const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require("path")
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
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
  
   socket.on("join-room", data => {
    /* socket.join(data) */
    console.log("Bạn đã tham gia room: " + data)
  }) 
  socket.on("SEND_MESSAGE_TO_FRIEND", data => {
    socket.to("609e3cb4501da742c855dc98").emit("MESSAGE", data)
  })
  socket.on('SEND_MESSAGE_TO_HOST', function (data) {
    io.to(socket.id).emit('MESSAGE_TO_HOST', data);
  });
});


