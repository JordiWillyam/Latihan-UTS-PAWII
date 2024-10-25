const mongoose = require ('mongoose');

const transaksiSchema = new mongoose.Schema({
    produk_id: {type: mongoose.Schema.Types.ObjectId, ref : "Produk", require : true},
    pengguna_id: {type: mongoose.Schema.Types.ObjectId, ref : "Pengguna", require : true},
    jumlah: {type: Number},
    total_harga:{type: Number},
    tanggal_transaksi: {type: Date}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Transaksi = mongoose.model("Transaksi",transaksiSchema);
module.exports= transaksi;