// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var MachineSchema = Schema({
  // Numero serie
  serialNumber: {
    type: Number,
    require: true
  },
  // tipo
  type: {
    type: String,
    require: true
  },
  // ubicacion
  location: {
    type: String,
    require: true
  },
  // modelo
  model: {
    type: String,
    require: true
  },
  // capacidad
  capacity: {
    type: Number,
    require: true
  },
  // cliente
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  // ventas
  sale: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale',
      default: []
    }
  ],
  //   articulos
  item: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      default: []
    }
  ]
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Machine', MachineSchema);
