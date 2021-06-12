var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `src/nodejs/assets/images/upload`)

  },
  filename: function (req, file, cb) {
    var fileName = file.originalname;
    var lastDotIndex = fileName.lastIndexOf('.')
    cb(null, fileName.slice(0, lastDotIndex) + '-' + Date.now() + fileName.slice(lastDotIndex, fileName.length))
  }
})

var upload = multer({ storage: storage })
module.exports.upload = upload
