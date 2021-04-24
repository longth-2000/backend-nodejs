const express = require("express")
const router = express.Router()
const provinceController = require("../../controller/AddressController/ProvinceController")
const districtController = require("../../controller/AddressController/DistrictController")
router.get("/province", provinceController.getProvinceInformation)
router.get("/province/:id/district", districtController.getDistrictInformation)
module.exports = router