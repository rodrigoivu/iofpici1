const { response } = require('express');
const Selectoralarm = require('../models/Selectoralarm');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Selectoralarm( req.body );

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
	const itemId = req.query.idselector;

    try {

		const items = await Selectoralarm.find({
											'selector': itemId,
											ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
												}
										})
                            		.sort([['ts', 1]]);
        
        if ( !(items.length > 0)  ) {
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
	const nitems = parseInt(req.query.items) || 1000;
	const itemId = req.query.itemId; 

    try {

		const items = await Selectoralarm.find({ 'selector': itemId })
										.skip(0)
										.limit(nitems)
                            			.sort([['ts', -1]]);
        
        if ( !(items.length > 0)  ) {
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

		const items = await Selectoralarm.find({
												ts :{
														'$gte': (new Date(desde)).getTime(),
														'$lte': (new Date(hasta)).getTime()
													}
											})
									.populate({
										path:'selector',
	   									select:'nombre'
									})
									.sort([['ts', 1]]);
        
        if ( !(items.length > 0)  ) {
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
	const itemId = req.query.idselector;

    try {

		const items = await Selectoralarm.find({
												'selector': itemId,
												ts :{
														'$gte': (new Date(desde)).getTime(),
														'$lte': (new Date(hasta)).getTime()
													}
											 })
										.populate({
											path:'selector',
	   										select:'nombre'
										})
                            			.sort([['ts', 1]]);
        
        if ( !(items.length > 0)  ) {
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
        
        const item = await Selectoralarm.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Selectoralarm.findByIdAndDelete( itemId );

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