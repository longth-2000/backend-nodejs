const loginRouter = require("../routes/login")
const registerRouter = require("../routes/register")
const profileRouter = require("../routes/profile")
const storageImage = require("../storage/images/storage")
const searchRouter = require("../routes/search")
const provinceRouter = require("../routes/addressRouter/province")
const reactRouter = require("../routes/react")
const viewRouter = require("../routes/view")
const chatRouter = require("../routes/chat")
function route(app) {
  app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
  app.use("/register", registerRouter)
  app.use("/profile", storageImage.upload.single("fileUpload"), profileRouter)
  app.use("/search", searchRouter)
  app.use("/address", provinceRouter)
  app.use("/react", reactRouter)
  app.use("/view", viewRouter)
  app.use("/chat", chatRouter)
  app.use("/", loginRouter)
}
module.exports = route