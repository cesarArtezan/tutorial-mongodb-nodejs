// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Llamamos las rutas de cada coleccion
var customerRouter = require('../routes/customes.router')
// crear urls que redirigen a las rutas
var api = express.Router();
// clientes
api.use('/customer', customerRouter)
// ruta para maquinas
api.use('/machine', customerRouter)
// ruta para articulos
api.use('/item', customerRouter)
// ruta para ventas
api.use('/sale', customerRouter)
// Exportamos la configuración
module.exports = api;