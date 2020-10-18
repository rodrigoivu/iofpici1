const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt');

const registerUser = async( req, res = response ) => {

    const {  email, password } = req.body;
    
    try {

        let user = await User.findOne({ email: email.toLowerCase() });

        if( user ){
            return res.status(400).json({
                ok: false,
                msg:'Ya existe un usuario con ese correo'
            })
        }

        user = new User( req.body );

        //Guardar Mail en minúscula
        user.email = email.toLowerCase();

        //Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        await user.save();

        // Generar JWT
        const token = await generarJWT(user.id, user.name, user.role );

        res.status(201).json({
            ok:   true,
            uid:  user.id,
            name: user.name,
            role: user.role,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al registrar usuario'
        });
    }
    
};

const loginUser = async ( req, res = response  ) => {
    const { email, password } = req.body;
    
    try {

        const user = await User.findOne({ email: email.toLowerCase() });

        if( !user ){
            return res.status(400).json({
                ok: false,
                msg:'Usuario con ese E-mail no existe'
            });
        }

        //Confirmar paswwords
        const validPassword = bcrypt.compareSync( password, user.password );

        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generarJWT(user.id, user.name, user.role );

        res.json({
            ok:   true,
            uid:  user.id,
            name: user.name,
            role: user.role,
            token
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al ingresar usuario'
        });
    }


    
};

const refreshToken = async ( req, res = response  ) => {

    const { uid, name, role }  = req;

    // Generar JWT
    const token = await generarJWT(uid, name, role );

    res.json({
        ok:true,
        token
    });
};

const updateUser = async ( req, res = response ) => {

    const userId  = req.params.id;
    const role = req.role;
    let params = req.body;

    try {
        
        const user = await User.findById( userId );

        if ( !user ) {
            return res.status(404).json({
                ok:false,
                msg: 'Usuario no existe con ese id'
            });
        }

        if(params.role){
            if ( role !== 'ADMIN_ROLE' ){
                return res.status(404).json({
                    ok:false,
                    msg: 'Debe ser usuario autorizado'
                });
            }
        }

        if( params.password ){
            //Encriptar password
            const salt = bcrypt.genSaltSync();
            params.password = bcrypt.hashSync( params.password, salt );
        }


        let userUpdated = await User.findByIdAndUpdate( userId, params, { new: true });

        userUpdated.password=':)';

        res.json({
            ok: true,
            user: userUpdated
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Contactar con administrador'
        });
    }
}

const deleteUser = async( req, res = response ) => {
    const userId = req.params.id;
    const uid = req.uid;

    try {
        
        const user = await User.findById( userId );

        if ( !user ) {
            return res.status(404).json({
                ok:false,
                msg: 'Usuario no existe con ese id'
            });
        }

        if ( userId === uid ) {
            return res.status(401).json({
                ok:false,
                msg: 'No se puede eliminar a si mismo'
            });
        }


        await User.findByIdAndDelete( userId );

        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Contactar con administrador'
        });
    }
}

const getUsers = async( req, res = response ) => {

    try {

        const users = await User.find({},'name email image role services')
                            .sort([['name', 1]]);
        
        if ( !(users.length > 0)  ) {
            return res.status(404).json({
                ok:false,
                msg: 'No hay registros'
            });
        }

        res.json({
            ok:true,
            users
        })

    } catch (error) {

        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al obtener información'
        });

    }
    
}

const getUsersPag = async( req, res = response ) => {

    const desde = Number(req.query.desde) || 0;
	const items = Number(req.query.items) || 10;
	const orden = Number(req.query.orden) || 1; // 1: ascendente -1: descendente

    try {

        const [ users, total ] = await Promise.all([
            User.find({},'name email image role services')
                .skip(desde)
                .limit(items)
                .sort([['name', orden]]),
            User.count()
        ]);
                
        if ( !(users.length > 0)  ) {
            return res.status(404).json({
                ok:false,
                msg: 'No hay registros'
            });
        }

        res.json({
            ok:true,
            users,
            total
        })

    } catch (error) {

        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al obtener información'
        });

    }
    
}

const getUserId = async( req, res = response ) => {

    var uid = req.params.id;

    try {

        const user = await User.findById(uid,'name email image role services');
        
        if ( !user ) {
            return res.status(404).json({
                ok:false,
                msg: 'No hay registros'
            });
        }

        res.json({
            ok:true,
            user
        })

    } catch (error) {

        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al obtener información'
        });

    }
    
}

const getUserEmail = async( req, res = response ) => {

    var email = req.params.email;

    try {

        const user = await User.findOne({email: email.toLowerCase()},'name email image role services');

        if ( !user ) {
            return res.status(404).json({
                ok:false,
                msg: 'No hay registros'
            });
        }

        res.json({
            ok:true,
            user
        })

    } catch (error) {

        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al obtener información'
        });

    }
    
}

module.exports = {
    registerUser,
    loginUser,
    refreshToken,
    updateUser,
    deleteUser,
    getUsers,
    getUsersPag,
    getUserId,
    getUserEmail
}