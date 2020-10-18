/*
    ruta: api/alimento/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        actualizaItem,
        itemsTodos,
        deleteItem } = require('../controllers/alimento');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

router.post   ( '/register'  , registraItem  );
router.put    ( '/update/:id', actualizaItem );
router.get    ( '/todos'     , itemsTodos    );
router.delete ( '/delete/:id', deleteItem    );

module.exports = router;