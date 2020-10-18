/*
    ruta: api/selector/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        actualizaItem,
        itemsTodos,
        deleteItem } = require('../controllers/selector');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

// router.post   ( '/register'      , ensureAdmin , registraItem );
router.post   ( '/register'      , registraItem       );
router.put    ( '/update/:id'    , actualizaItem      );
router.get    ( '/todos'         , itemsTodos         );
router.delete ( '/delete/:id'    , deleteItem         );



module.exports = router;