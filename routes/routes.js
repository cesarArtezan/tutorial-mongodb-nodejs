// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Llamamos las rutas de cada coleccion
var customerRouter = require('../routes/customes.router');
var machineRouter = require('../routes/machines.router');
var itemsRouter = require('../routes/items.router');
var salesRouter = require('../routes/sales.router');
// crear urls que redirigen a las rutas
var api = express.Router();
// clientes
api.use('/customer', customerRouter);
// ruta para maquinas
api.use('/machine', machineRouter);
// ruta para articulos
api.use('/item', itemsRouter);
// ruta para ventas
api.use('/sale', salesRouter);
// Exportamos la configuración
module.exports = api;
