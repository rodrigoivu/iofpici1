/*
    ruta: api/blucontrol/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { 
        actualizaItem,
        itemUltimo } = require('../controllers/blucontrol');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

router.put( '/update/:id', actualizaItem );
router.get( '/ultimo'     , itemUltimo    );

module.exports = router;