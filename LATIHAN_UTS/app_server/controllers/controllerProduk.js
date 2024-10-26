const Produk = require("../models/produk");

const index = (req, res, next) => {
    Produk.find({}, { __v: 0 })
      .then((produk) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Success",
            data: produk
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Failed"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const mhs = new Produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      stok: req.body.stok,
    });
  
    mhs
      .save() // menyimpan data ke tabel
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Success",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Failed"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports= {index,insert}