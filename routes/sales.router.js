// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos los modelos para usarlos posteriormente
var Sale = require('../models/sale.model');
var router = express.Router();
/**
 * Inician las rutas con get,post,put, delete
 * cada una tiene su funtion (response, request)
 */

// get
router.get('/', (req, res) => {
  // con Item carga el modelo de mongoose
  // con .find regresa todos los documentos
  Sale.find()
    // con populate nos muestra todos los atributos, no solo el _id
    .populate('item')
    .populate('machine')
    // despues de encontrar docs
    .then(data => {
      // da como respuesta todos los doc en la BD
      res.status(200).json({ data });
    })
    // si hay error
    .catch(error => {
      res.status(500).json({ error });
    });
});
// get one by id
router.get('/:id', (req, res) => {
  // lee el id en la url parametro
  // ej http://localhost:3000/api/Item/56325
  const id = req.params.id;
  Sale.findById(id)
    // con populate nos muestra todos los atributos, no solo el _id
    .populate('item')
    .populate('machine')
    // despues de encontrar doc
    .then(data => {
      // da como respuesta  el doc en la BD
      res.status(200).json({ data });
    })
    // si hay error
    .catch(error => {
      res.status(500).json({ error });
    });
});

// post crear nuevo doct
router.post('/', (req, res) => {
  // lee el modelo en el cuerpo del request
  // la fecha no se pone, ya que se genera sola
  const totalItems = req.body.totalItems;
  const price = req.body.price;
  const item = req.body.item;
  const machine = req.body.machine;
  // crear el nuevo docuemnto extraido del modelo
  // tomando los valores del cuerpo
  const sale = new Sale({
    totalItems,
    price,
    item,
    machine
  });
  sale
    .save()
    // si se guardo da como resultado el nuevo doc
    .then(data => {
      res.status(201).json({ data });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// put modificar doc
router.put('/:id', (req, res) => {
  // lee el id de la url para modificar
  const id = req.params.id;
  // con el metodo de mongoose se actualiza por id
  // primer parametro es id y el segundo son los datos a modificar
  Sale.findByIdAndUpdate(id, req.body)
    .then(() => {
      // cuando finaliza regresa un true
      res.status(200).json({ data: true });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  //busca por id y elimina
  Sale.findByIdAndDelete(id)
    .then(() => {
      // cuando finaliza regresa un true
      res.status(200).json({ data: true });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// Exportamos la configuración
module.exports = router;
