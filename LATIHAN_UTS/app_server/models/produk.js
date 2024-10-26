const mongoose = require ('mongoose');

const produkSchema = new mongoose.Schema({
    nama: {type: String,},
    deskripsi: {type: String,},
    harga: {type: String,require:true,unique: true,},
    stok:{type: Number,},
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Produk = mongoose.model("Produk",produkSchema);
module.exports= Produk;