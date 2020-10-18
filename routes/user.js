/* 
   ruta: api/user/
*/
const { Router } = require('express');
const { check  } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { registerUser, loginUser, refreshToken, updateUser, getUsers, getUsersPag, getUserId,getUserEmail} = require('../controllers/user');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ensureAdmin, ensureSameOrAdmin } = require('../middlewares/validar-roles');
const router = Router();

//REGISTRAR
router.post(
    '/register',
    [//middlewares
        check('name', 'El nombre es obligtorio').not().isEmpty(),
        check('email', 'El email es obligtorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    registerUser
);

//LOGIN
router.post(
    '/login',
    [
        check('email', 'Hay un problema con el email').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUser
);

//VALIDAR TOKEN
router.use( validarJWT ); // se validan las que estan abajo de est línea

//ACTUALIZA USER
router.put('/update/:id', ensureSameOrAdmin, updateUser );

//DELETE USER
router.delete('/delete/:id', ensureAdmin, updateUser );

//Renovar TOKEN
router.get('/renew', refreshToken );

//OBTENER TODOS
router.get('/all', getUsers );

//OBTENER TODOS PAGINADOS
router.get('/pag', getUsersPag );

//OBTENER USER POR ID
router.get('/id/:id', getUserId );

//OBTENER USER POR EMAIL
router.get('/email/:email', getUserEmail );

module.exports = router;


// check('role','Éste rol no está permitido').isIn([ 'ADMIN_ROLE', 'USER_ROLE', 'INITIAL_ROLE' ]),