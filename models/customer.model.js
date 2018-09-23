// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var CustomerSchema = Schema({
  // razon social
  businessName: {
    type: String,
    require: true
  },
  // direccion
  adress: {
    type: String,
    require: true
  },
  // tipo de cliente
  customerType: {
    type: String,
    require: true
  },
  // descuento
  discount: {
    type: Number,
    require: true
  },
  // maquinas
  /* machine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Machine',
      default: []
    }
  ] */
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Customer', CustomerSchema);
