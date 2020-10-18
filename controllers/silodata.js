const { response } = require('express');
const Silodata = require('../models/Silodata');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Silodata( req.body );

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
	const itemId = req.query.idsilo;

    try {

		const items = await Silodata.find({
											'silo': itemId,
											ts : {
												'$gte': (new Date(desde)).getTime(),
												'$lte': (new Date(hasta)).getTime()
												}
										})
									.populate({
										path:'silo',
										select:['nombre']
									})
									.populate({
										path:'alimento',
										select:'nombre'
									})
									.populate({
										path:'user',
										select:'name'
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
// MOSTRAR RANGO DE FECHAS TODOS
//================================================
const itemsRangoFechasTodos = async( req, res = response ) => {
	const desde = req.query.desde;
	const hasta = req.query.hasta;

    try {

		const items = await Silodata.find({
											ts : {
												'$gte': (new Date(desde)).getTime(),
												'$lte': (new Date(hasta)).getTime()
												}
										})
									.populate({
										path:'silo',
										select:['nombre']
									})
									.populate({
										path:'alimento',
										select:'nombre'
									})
									.populate({
										path:'user',
										select:'name'
									})
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
// MOSTRAR RANGO LOS ULTIMOS SILO 
//================================================
const itemsRangoUltimosSilo = async( req, res = response ) => {
	const nitems = parseInt(req.query.items) || 1000;
	const itemId = req.query.idsilo; 

    try {

		const items = await Silodata.find({ 'silo': itemId })
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
// MOSTRAR RANGO LOS ULTIMOS ITEMS 
//================================================
const itemsRangoUltimos = async( req, res = response ) => {
	const nitems = parseInt(req.query.items) || 1000; 

    try {

		const items = await Silodata.find()
									.populate({
										path:'silo',
										select:['nombre']
									})
									.populate({
										path:'alimento',
										select:'nombre'
									})
									.populate({
										path:'user',
										select:'name'
									})
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
// ELIMINAR ITEM
//================================================
const deleteItem = async( req, res = response ) => {
    const itemId = req.params.id;

    try {
        
        const item = await Silodata.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Silodata.findByIdAndDelete( itemId );

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
	itemsRangoFechasTodos,
	itemsRangoUltimos,
	itemsRangoUltimosSilo,
	deleteItem
};