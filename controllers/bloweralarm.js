const { response } = require('express');
const Bloweralarm = require('../models/Bloweralarm');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Bloweralarm( req.body );

    try {

        const itemStored = await item.save();
        res.json({
            ok:true,
            item: itemStored
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al registrar item'
        });
    }

}

//================================================
// MOSTRAR RANGO DE FECHAS POR ITEM
//================================================
const itemsRangoFechas = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idblower;

    try {

		const items = await Bloweralarm.find({
												'blower': itemId,
												ts : {
                                                        '$gte': (new Date(desde)).getTime(),
                                                        '$lte': (new Date(hasta)).getTime()
													}
											})
                            			.sort([['ts', 1]]);
        
        if (  !(items.length > 0) ) {
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

//================================================
// MOSTRAR RANGO LOS ULTIMOS ITEMS 
//================================================
const itemsRangoUltimos = async( req, res = response ) => {
	const nitems = parseInt( req.query.items ) || 1000;
	const itemId = req.query.idblower; 

    try {

		const items = await Bloweralarm.find({ 'blower': itemId })
										.skip(0)
										.limit(nitems)
                            			.sort([['ts', -1]]);
        
        if ( !(items.length > 0) ) {
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

//================================================
// MOSTRAR TODOS DIA
//================================================
const itemsTodosDia = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;

    try {

		const items = await Bloweralarm.find({
												ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
													}
											 })
										.populate({
											path:'blower',
	   										select:'nombre'
										})
                            			.sort([['ts', 1]]);
        
        if ( !(items.length > 0) ) {
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

//================================================
// MOSTRAR ITEM DIA
//================================================
const itemDia = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idblower;

    try {

		const items = await Bloweralarm.find({
												'jaula': itemId,
												ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
													}
											 })
										.populate({
											path:'blower',
	   										select:'nombre'
										})
                            			.sort([['ts', 1]]);
        
        if (  !(items.length > 0) ) {
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

//================================================
// ELIMINAR ITEM
//================================================
const deleteItem = async( req, res = response ) => {
    const itemId = req.params.id;

    try {
        
        const item = await Bloweralarm.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Bloweralarm.findByIdAndDelete( itemId );

        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            ok:false,
            msg: 'Error al eliminar item'
        });
    }
}

module.exports = {
    registraItem,
	itemsRangoFechas,
	itemsRangoUltimos,
	itemsTodosDia,
	itemDia,
	deleteItem
};