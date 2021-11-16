const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AccesoriosSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  precio: { type: String, required: true, max: 40 },
  detalle: { type: String, required: true, max: 40 },
  categoria: { type: String, required: true, max: 40 },
  imagen: { type: String, required: true, max: 150 },
});

module.exports = mongoose.model("accesorios", AccesoriosSchema);
