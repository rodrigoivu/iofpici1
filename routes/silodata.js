/*
    ruta: api/silodata/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        itemsRangoFechas,
        itemsRangoFechasTodos,
        itemsRangoUltimos,
        itemsRangoUltimosSilo,
        deleteItem } = require('../controllers/silodata');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

router.post   ('/register'          , registraItem          );
router.get    ('/rango-fechas'      , itemsRangoFechas      );
router.get    ('/rango-fechas-todos', itemsRangoFechasTodos );
router.get    ('/rango-ultimos'     , itemsRangoUltimos     );
router.get    ('/rango-ultimos-silo', itemsRangoUltimosSilo );
router.delete ('/delete/:id'        , deleteItem            );

module.exports = router;