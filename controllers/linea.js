const { response } = require('express');
const Linea = require('../models/Linea');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Linea( req.body );

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
// ACTUALIZAR UN ITEM
//================================================
const actualizaItem = async( req, res = response ) => {

    var itemId = req.params.id; 
	var params = req.body;

    try {
        
        const itemFound = await Linea.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        const item = await Linea.findByIdAndUpdate( itemId, params, { new: true });

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
const itemsTodos = async( req, res = response ) => {


    try {

		const items = await Linea.find()
                            	  .sort([['nombre', 1]]);
        
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
// MOSTRAR TODOS COMPLETO
//================================================
const itemsTodosCompleto = async( req, res = response ) => {

    try {

		const items = await Linea.find()
								.populate({
									path:'blower',
									populate:{ 
										path: 'presion'
									}
								})
								.populate({
										path:'jaula',
										populate:{ 
											path: 'doser',
											populate:{
												path:'silo',
												populate:{
                                                    path:'alimentos',
                                                    populate:{
                                                        path:'alimento',
                                                    }
												}
											}
										}
									})
								.populate('selector')
								.sort([['nombre', 1]]);
        
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
        
        const item = await Linea.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Linea.findByIdAndDelete( itemId );

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
	actualizaItem,
	itemsTodos,
	itemsTodosCompleto,
    deleteItem
};