const { response } = require('express');
const Calibdata = require('../models/Calibdata');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Calibdata( req.body );

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
	const itemId = req.query.iddoser;

    try {

		const items = await Calibdata.find({
											'doser': iddoser,
											ts : {
													'$gte': (new Date(desde)).getTime(),
													'$lte': (new Date(hasta)).getTime()
												 }
											})
									.populate({
										path:'doser',
										select:['nombre','linea'],
										populate:{ 
											path: 'linea',
											select:'nombre'
										}
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

		const items = await Calibdata.find({
											ts : {
												'$gte': (new Date(desde)).getTime(),
												'$lte': (new Date(hasta)).getTime()
												}
											})
									 .populate({
										path:'doser',
										select:['nombre','linea'],
										populate:{ 
											path: 'linea',
											select:'nombre'
										}
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
// MOSTRAR RANGO LOS ULTIMOS POR ITEM (DOSER) 
//================================================
const itemsRangoUltimosDoser = async( req, res = response ) => {
	const nitems = parseInt(req.query.items) || 1000;
	const itemId = req.query.iddoser; 

    try {

		const items = await Calibdata.find({ 'doser': itemId })
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
// MOSTRAR RANGO LOS ULTIMOS TODOS 
//================================================
const itemsRangoUltimos = async( req, res = response ) => {
	const nitems = parseInt(req.query.items) || 1000;

    try {

		const items = await Calibdata.find()
									 .populate({
										path:'doser',
										select:['nombre','linea'],
										populate:{ 
											path: 'linea',
											select:'nombre'
										}
									 })
								     .populate({
										path:'alimento',
										select:'nombre'
									 })
								    //  .populate({
									// 	path:'user',
									// 	select:'name'
									//  })
									 .skip(0)
									 .limit(nitems)
                            		 .sort([['ts', -1]]);
        if (!(items.length > 0)  ) {
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
        
        const item = await Calibdata.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Calibdata.findByIdAndDelete( itemId );

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
	itemsRangoUltimosDoser,
	itemsRangoUltimos,
	deleteItem
};