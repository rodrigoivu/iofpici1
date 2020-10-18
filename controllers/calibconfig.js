const { response } = require('express');
const Calibconfig = require('../models/Calibconfig');

//================================================
// REGISTRAR UN ITEM
//================================================
const registraItem = async() => {

    const item = new Calibconfig({
						tpo1: 30,
						tpo2: 20,
						tpo3: 10,
						hz1 : 10,
						hz2 : 20,
						hz3 : 70
					});

    try {
        const itemStored = await item.save();
        console.log("idCalibconfig: "+itemStored._id);

    } catch (error) { console.log(error); }

}

//================================================
// CREAR UN ITEM INICIAL
//================================================
const crearItem = async() => {

    try {

		const items = await Calibconfig.findOne();
        
        if ( !items ) {
            console.log("No hay registros de Configuración de Calibración");
            registraItem();
        }else{
            console.log("si hay datos de Configuración de Calibración id:"+items._id);
        }

    } catch (error) {

        console.log(error);

    }

}

//================================================
// ACTUALIZAR UN ITEM
//================================================
const actualizaItem = async( req, res = response ) => {

    var itemId = req.params.id; 
	var params = req.body;

    try {
        
        const itemFound = await Calibconfig.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        const item = await Calibconfig.findByIdAndUpdate( itemId, params, { new: true });

        res.json({
            ok: true,
            item
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al actualizar item'
        });
    }

}

//================================================
// MOSTRAR TODOS 
//================================================
const itemUltimo = async( req, res = response ) => {


    try {

		const items = await Calibconfig.findOne();
        
        if ( !items ) {
            return res.status(404).json({
                ok:false,
                msg: 'No hay registros'
            });
        }

        res.json({
            ok:true,
            items
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
	registraItem,
	crearItem,
	actualizaItem,
	itemUltimo
	
};