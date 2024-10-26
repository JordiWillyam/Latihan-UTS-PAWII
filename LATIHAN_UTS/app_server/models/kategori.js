const mongoose = require ('mongoose');

const kategoriSchema = new mongoose.Schema({
    nama_kategori: {type: String,},
    deskripsi: {type: String,},
    created_at: {type: Date},
    update_at:{type: Date,},
    status: {Boolean}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Kategori = mongoose.model("Kategori",kategoriSchema);
module.exports= Kategori;