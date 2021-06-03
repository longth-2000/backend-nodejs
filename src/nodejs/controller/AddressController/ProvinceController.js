const axios = require("axios")
class ProvinceController {
    provinceList = [];
    getProvinceInformation(req, res) {
        axios.get("https://api.mysupership.vn/v1/partner/areas/province").then(response => {
            res.json(response.data)
            process.provinceList = response.data.results
            
        })
    } 
}
module.exports = new ProvinceController