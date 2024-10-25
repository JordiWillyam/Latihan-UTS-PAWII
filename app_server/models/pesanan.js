const mongoose = require ('mongoose');

const pesananSchema = new mongoose.Schema({
    pengguna_id: {type: mongoose.Schema.Types.ObjectId, ref : "Pengguna", require : true},
    produk_id: {type: mongoose.Schema.Types.ObjectId, ref : "Produk", require : true},
    jumlah: {type: Number},
    status:{type: String},
    tanggal_pesanan:{type: Date,}
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Pesanan = mongoose.model("Pesanan",pesananSchema);
module.exports= Pesanan;