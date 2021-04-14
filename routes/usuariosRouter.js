const express = require('express');
const router = express.Router();
const usuariosController = require('../Controllers/usuariosController')

// GET users
router.get('/', usuariosController.index);
// POST users
router.post('/', usuariosController.create);
// UPDATE users
router.put('/:id', usuariosController.update);
// DELETE users
router.delete('/:id', usuariosController.delete);

module.exports = router;