const mongoose = require ('mongoose');

const pembayaranSchema = new mongoose.Schema({
    transaksi_id: {type: mongoose.Schema.Types.ObjectId, ref : "Transaksi", require : true},
    metode_pembayaran: {type: String},
    jumlah: {type: Number},
    tanggal_Pembayaran: {type: Date},
    status:{type: String}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Pembayaran = mongoose.model("Pembayaran",pembayaranSchema);
module.exports= Pembayaran;