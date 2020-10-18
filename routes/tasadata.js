/*
    ruta: api/tasadata/
*/
const { Router } = require('express');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin,ensureNotInitial } = require('../middlewares/validar-roles');
const { registraItem,
        itemsRangoFechas,
        itemsRangoUltimos,
        itemsTodosDia,
        itemDia,
        deleteItem } = require('../controllers/tasadata');

const router = Router();

// router.use( [validarJWT,ensureNotInitial]);

router.post   ('/register'     , registraItem      );
router.get    ('/rango-fechas' , itemsRangoFechas  );
router.get    ('/rango-ultimos', itemsRangoUltimos );
router.get    ('/todos-dia'    , itemsTodosDia     );
router.delete ('/delete/:id'   , deleteItem        );

module.exports = router;