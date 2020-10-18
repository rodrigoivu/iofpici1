/*
    ruta: api/sensordata/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        itemsRangoFechas,
        itemsRangoUltimos,
        deleteItem } = require('../controllers/sensordata');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

router.post   ('/register'     , registraItem      );
router.get    ('/rango-fechas' , itemsRangoFechas  );
router.get    ('/rango-ultimos', itemsRangoUltimos );
router.delete ('/delete/:id'   , deleteItem        );

module.exports = router;