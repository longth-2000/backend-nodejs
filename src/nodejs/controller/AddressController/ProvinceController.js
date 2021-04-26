const axios = require("axios")
class ProvinceController {
    provinceList = [];
    getProvinceInformation(req, res) {
        axios.get("https://thongtindoanhnghiep.co/api/city").then(response => {
            res.json(response.data)
            process.provinceList = response.data
        })
    } 
}
module.exports = new ProvinceController