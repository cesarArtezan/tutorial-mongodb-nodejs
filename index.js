
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');
// Cargamos el fichero app.js con la configuración de Express
var app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3000;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise; 
// URL de la base de datos
var mongoURL = 
// 'mongodb://localhost:27017/mydb'
'mongodb://no-sql:no-sql2018@ds111993.mlab.com:11993/no-sql'
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect(mongoURL,  { useMongoClient: true})
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos  se ha realizado correctamente")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen( process.env.PORT || port, () => {
            console.log("servidor corriendo en puerto: " + port);
        });
    })
    // Si no se conecta correctamente 
    .catch(err => console.log('No se pudo conectar ERROR'));