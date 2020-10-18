/*
    ruta: api/upload/
*/
const { Router } = require('express');
const expressFileUpload = require('express-fileupload');


const { validarJWT } = require('../middlewares/validar-jwt');
const { fileUpload, retornaImagen } = require('../controllers/upload');

const router = Router();

router.use( expressFileUpload() ); // permite ocupar el req.files

// router.put('/:tipo/:id', validarJWT , fileUpload );
router.put('/:tipo/:id'  , fileUpload    );
router.get('/:tipo/:foto', retornaImagen );



module.exports = router;