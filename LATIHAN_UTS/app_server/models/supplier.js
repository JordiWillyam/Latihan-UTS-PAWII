const mongoose = require ('mongoose');

const supplierSchema = new mongoose.Schema({
    nama_supplier: {type: String,},
    alamat: {type: String,},
    kontak: {type: String},
    email:{type: String,},
    tanggal_mendaftar:{type: Date}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Supplier = mongoose.model("Supplier",supplierSchema);
module.exports= Supplier;