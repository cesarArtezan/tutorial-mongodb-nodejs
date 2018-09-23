
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var routes = require('./routes/routes'); 
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas, todas empezarán con http://localhost:3000/api/
app.use('/api', routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;