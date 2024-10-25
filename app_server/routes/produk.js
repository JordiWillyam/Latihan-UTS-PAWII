const express = require("express");
const router = express.Router();
const controllerProduk = require ("../controllers/controllerProduk");

router.get("/", controllerProduk.index);
router.post("/insert", controllerProduk.insert);

// fungsi dam rute index kita gunakan untuk memanggil semua data dalam database mongoDB

module.exports = router;