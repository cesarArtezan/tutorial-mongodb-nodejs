// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var ItemsSchema = Schema({
  // SKU
  sku: {
    type: String,
    require: true
  },
  // si existe
  existence: {
    type: Boolean,
    require: true
  },
  // descripcion
  description: {
    type: String,
    require: true
  },
  // precio
  price: {
    type: Number,
    require: true
  },
  // costo
  cost: {
    type: Number,
    require: true
  },
  // maquinas
  machine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Machine',
      default: []
    }
  ],
  // ventas
  sale: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale',
      default: []
    }
  ]
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Item', ItemsSchema);
