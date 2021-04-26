const axios = require("axios")
function getProvince() {
   axios.get("https://thongtindoanhnghiep.co/api/city").then(response => {
        provinces = response.data.LtsItem
    })   
}
module.exports = getProvince
