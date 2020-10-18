/*
    ruta: api/silo/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        actualizaItem,
        itemsTodos,
        itemsTodosCompleto,
        deleteItem } = require('../controllers/silo');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

// router.post   ( '/register'      , ensureAdmin , registraItem );
router.post   ( '/register'      , registraItem       );
router.put    ( '/update/:id'    , actualizaItem      );
router.get    ( '/todos'         , itemsTodos         );
router.get    ( '/todos-completo', itemsTodosCompleto );
router.delete ( '/delete/:id'    , deleteItem         );

module.exports = router;