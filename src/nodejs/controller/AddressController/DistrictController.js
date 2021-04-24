const axios = require("axios")
class DistrictController {
    getDistrictInformation(req, res){
      axios.get(`https://thongtindoanhnghiep.co/api/city/${req.params.id}/district`).then(response => {
          res.json(response.data)
      })
    }
} 
module.exports = new DistrictController