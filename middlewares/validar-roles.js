const { response } = require('express');


const ensureAdmin = (req, res = response, next ) => {

    if ( req.role === 'ADMIN_ROLE' ){
        next();
    } else {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido, debe ser administrador'
        });
    }
}

const ensureSameOrAdmin = (req, res = response, next ) => {

    if ( req.uid === req.params.id || req.role === 'ADMIN_ROLE' ){
        next();
    } else {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido, debe ser usuario autorizado'
        });
    }
}

const ensureNotInitial = (req, res = response, next ) => {

    if ( req.role !== 'INITIAL_ROLE' ){
        next();
    } else {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido, debe ser usuario autorizado'
        });
    }
}

module.exports = {
    ensureAdmin,
    ensureSameOrAdmin,
    ensureNotInitial
}