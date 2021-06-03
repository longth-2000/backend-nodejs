const axios = require("axios")
class DistrictController {
    getDistrictInformation(req, res){
      axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${req.params.id}`).then(response => {
          res.json(response.data)
      })
    }
} 
module.exports = new DistrictController