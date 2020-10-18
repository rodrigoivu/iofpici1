const { response } = require('express');
const Alimentacion = require('../models/Alimentacion');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( data ) => {

    const item = new Alimentacion( data );

    try   { const itemStored = await item.save();}
    catch (error) { console.log(error); }

}

//================================================
// MOSTRAR RANGO DE FECHAS JAULA POR JAULA
//================================================
const itemsRangoFechas = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idjaula;

    try {

		const items = await Alimentacion.find({
												'jaula': itemId,
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
	const itemId = req.query.idjaula; 

    try {

		const items = await Alimentacion.find({ 'jaula': itemId })
										.skip(0)
										.limit(nitems)
                            			.sort([['ts', -1]]);
        
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
// MOSTRAR RANGO DE FECHAS TODOS DIA
//================================================
const itemsTodosDia = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;

    try {

		const items = await Alimentacion.find({
												ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
													}
											 })
										.populate({
											path:'jaula',
											select:['nombre','aliasJaula']
										})
										.populate({
											path:'alimento',
											select:['nombre','medicado','codigo','id_empresa']
										})
										.populate({
											path:'silo',
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
// MOSTRAR DIA POR JAULA
//================================================
const itemDia = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idjaula;

    try {

		const items = await Alimentacion.find({
												'jaula': itemId,
												ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
													}
											 })
										.populate({
											path:'jaula',
											select:['nombre','aliasJaula']
										})
										.populate({
											path:'alimento',
											select:['nombre','medicado','codigo','id_empresa']
										})
										.populate({
											path:'silo',
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
        
        const item = await Alimentacion.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Alimentacion.findByIdAndDelete( itemId );

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
	itemsRangoFechas,// por jaula
	itemsRangoUltimos,
	itemsTodosDia,
	itemDia,
	deleteItem
};