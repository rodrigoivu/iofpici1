const { response } = require('express');
const Plan = require('../models/Plan');

//================================================
// REGISTRAR UN ITEM
//================================================
const registraItem = async() => {

    var item = new Plan({
				especie:'salar',
				temperatura:12,
				fecha:'',
				inialim:'06:00',
				finalim:'21:00',
				hrsnoalim:4,
				hrsdisponible:14,
				hrsefectivas:10,
				centro:'',
				idcentro:'',
				minutosVisita:1.5
			});

    try {
        const itemStored = await item.save();
        console.log("idPlan: " + itemStored._id);
      
    } catch (error) { console.log(error); }

}

//================================================
// CREAR UN ITEM INICIAL
//================================================
const crearItem = async() => {

    try {

		const items = await Plan.findOne();
        
        if ( !items ) {
            console.log("No hay registros de Plan");
            registraItem();
        }else{
            console.log("si hay datos de Plan id:"+items._id);
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
        
        const itemFound = await Plan.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        const item = await Plan.findByIdAndUpdate( itemId, params, { new: true });

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

		const items = await Plan.findOne();
        
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