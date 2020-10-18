const { response } = require('express');
const Blucontrol = require('../models/Blucontrol');

//================================================
// REGISTRAR UN ITEM
//================================================
const registraItem = async() => {

    const item = new Blucontrol({
						url_blucontrol: 'https://iblufeederfk1wvxr86w.us3.hana.ondemand.com/',
						username      : 'blufeeder',
						password      : 'blufeeder2020',
						token         : ''
					});

    try {

        const itemStored = await item.save();
        console.log("idBlucontrol: "+ itemStored._id);

    } catch (error) { console.log(error); }

}

//================================================
// CREAR UN ITEM INICIAL
//================================================
const crearItem = async() => {

    try {

		const items = await Blucontrol.findOne();

        if ( !items ) {
            console.log("No hay registros de Blucontrol");
            registraItem();
        }else{
            console.log("si hay datos de Blucontrol id:"+items._id);
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
        
        const itemFound = await Blucontrol.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        const item = await Blucontrol.findByIdAndUpdate( itemId, params, { new: true });

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
// MOSTRAR UNO 
//================================================
const itemUltimo = async( req, res = response ) => {

    try {

		const items = await Blucontrol.findOne();

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