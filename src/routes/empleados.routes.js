const express = require('express');
const router = express.Router();

const empleadoController = require('../controllers/empleados.controllers');

router.get('/', empleadoController.getEmpleado);
router.post('/', empleadoController.valEmpleado);

module.exports = router;