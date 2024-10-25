const mongoose = require ('mongoose');

const penggunaSchema = new mongoose.Schema({
    nama: {type: String},
    email: {type: String},
    password: {type: String},
    alamat:{type: String},
    tanggal_daftar: {type: Date}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Pengguna = mongoose.model("Pengguna",penggunaSchema);
module.exports= Pengguna;