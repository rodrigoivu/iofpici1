/*
    ruta: api/jaula/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        actualizaItem,
        itemsTodos,
        itemsTodosSort,
        itemsTodosCompleto,
        itemsTodosCompletoSGR,
        actualizaItemPeso,
        actualizaItemCategoria,
        deleteItem } = require('../controllers/jaula');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

// router.post   ( '/register'      , ensureAdmin , registraItem );
router.post   ( '/register'      , registraItem       );
router.put    ( '/update/:id'    , actualizaItem      );
router.put    ( '/update-peso/:id', actualizaItemPeso );
router.put    ( '/update-categoria/:id', actualizaItemCategoria );
router.get    ( '/todos'         , itemsTodos         );
router.get    ( '/todos-sort'    , itemsTodosSort     );
router.get    ( '/todos-completo', itemsTodosCompleto );
router.get    ( '/todos-completosgr', itemsTodosCompletoSGR );
router.delete ( '/delete/:id'    , deleteItem         );


module.exports = router;