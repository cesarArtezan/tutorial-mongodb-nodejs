// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var SaleSchema = Schema({
  // Cantidad
  totalItems: {
    type: Number,
    require: true
  },
  // Fecha por defecto pone fecha actual
  date: {
    type: Date,
    default: Date.now
  },
  // precio
  price: {
    type: Number,
    require: true
  },
  // articulo
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  },
  //  maquina
  machine: {
    type: Schema.Types.ObjectId,
    ref: 'Machine'
  }
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Sale', SaleSchema);
