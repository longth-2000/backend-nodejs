const loginRouter = require("../routes/login")
const registerRouter = require("../routes/register")
const profileRouter = require ("../routes/profile")
const storageImage = require ("../storage/images/storage")
const searchRouter = require("../routes/search")
const provinceRouter = require ("../routes/addressRouter/province")
function route(app){
  app.use("/register",registerRouter)
  app.use("/profile" , storageImage.upload.single("fileUpload") , profileRouter) 
  app.use("/search",searchRouter)
  app.use("/address",provinceRouter)
  app.use("/", loginRouter)
}
module.exports = route