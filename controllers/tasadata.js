const { response } = require('express');
const Tasadata = require('../models/Tasadata');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Tasadata( req.body );
	const ts = new Date();
	item.ts = ts;

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
// MOSTRAR RANGO DE FECHAS JAULA POR JAULA
//================================================
const itemsRangoFechas = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idjaula;

    try {

		const items = await Tasadata.find({
											'jaula': itemId,
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
	const nitems = parseInt( req.query.items ) || 1000; 
	const itemId = req.query.idjaula; 

    try {

		const items = await Tasadata.find({'jaula': itemId})
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

		const items = await Tasadata.find({
											ts : {
												'$gte': (new Date(desde)).getTime(),
												'$lte': (new Date(hasta)).getTime()
												}
										})
										.populate({
											path:'jaula',
											select:'nombre'
										})
									 	.populate({
											path:'alimento',
											select:['nombre','medicado']
										})
										.populate({
											path:'silo',
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
// MOSTRAR DIA POR ITEM
//================================================
const itemDia = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;
	const itemId = req.query.idjaula;

    try {

		const items = await Tasadata.find({
											'jaula': itemId,
											ts : {
												'$gte': (new Date(desde)).getTime(),
												'$lte': (new Date(hasta)).getTime()
												}
										})
									.populate({
										path:'jaula',
										select:'nombre'
									})
									.populate({
										path:'alimento',
										select:['nombre','medicado']
									})
									.populate({
										path:'silo',
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
        
        const item = await Tasadata.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Tasadata.findByIdAndDelete( itemId );

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