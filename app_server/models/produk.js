const mongoose = require ('mongoose');

const produkSchema = new mongoose.Schema({
    nama: {type: String,},
    deskripsi: {type: String,},
    harga: {type: String,require:true,unique: true,},
    stok:{type: Date,},
    kategori_id:{type: mongoose.Schema.Types.ObjectId, ref : "Kategori", require : true}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Produk = mongoose.model("Produk",produkSchema);
module.exports= Produk;