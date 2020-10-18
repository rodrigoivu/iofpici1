const { response } = require('express');
const Jaula = require('../models/Jaula');
const SGR = require('../sgr/sgr');

//================================================
// CREAR UN ITEM
//================================================
const registraItem = async( req, res = response ) => {

    const item = new Jaula( req.body );

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
        
        const itemFound = await Jaula.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }
        
        const item = await Jaula.findByIdAndUpdate( itemId, params, { new: true });

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
// ACTUALIZAR PESO
//================================================
const actualizaItemPeso = async( req, res = response ) => {

    let itemId = req.params.id; 
    let params = req.body;
    const temp = parseFloat(req.query.temp);

    try {
        
        const itemFound = await Jaula.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }
        if(!('sgr' in params)){
            let sgr_e = SGR.estimaSGR(temp,params.peso);
            params = {...params,'sgr':sgr_e}
        }
        const item = await Jaula.findByIdAndUpdate( itemId, params, { new: true });

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
// ACTUALIZAR PESO
//================================================
const actualizaItemCategoria = async( req, res = response ) => {

    let itemId = req.params.id; 
    let params = req.body;

    try {
        
        const itemFound = await Jaula.findById( itemId );

        if ( !itemFound ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        const item = await Jaula.findByIdAndUpdate( itemId, params, { new: true });

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

		const items = await Jaula.find()
                            	  .sort([['orden', 1]]);
        
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
// MOSTRAR TODOS ORDENADOS
//================================================
const 	itemsTodosSort = async( req, res = response ) => {

    try {

		const items = await Jaula.find()
								.sort([['orden', 1]]);
        
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

		const items = await Jaula.find()
								.populate({
									path:'linea'
								})
								.populate({
										path:'doser'
                                })
                                .populate({
                                    path:'doser_med'
                                })
								.sort([['orden', 1]]);
        
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
// MOSTRAR TODOS COMPLETO SGR
//================================================
const itemsTodosCompletoSGR = async( req, res = response ) => {
    const temp = parseFloat( req.query.temp ) || 11;
    try {

		const items = await Jaula.find()
								.populate({
									path:'linea'
								})
								.populate({
										path:'doser'
                                })
                                .populate({
                                    path:'doser_med'
                                })
								.sort([['orden', 1]]);
        items.map((x)=>{
            let sgr_e = SGR.estimaSGR(temp,x.peso);
            x.sgr = sgr_e;
        })

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
        
        const item = await Jaula.findById( itemId );

        if ( !item ) {
            return res.status(404).json({
                ok:false,
                msg: 'Item no existe con ese id'
            });
        }

        await Jaula.findByIdAndDelete( itemId );

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
    actualizaItemPeso,
    actualizaItemCategoria,
	itemsTodos,
	itemsTodosSort,
    itemsTodosCompleto,
    itemsTodosCompletoSGR,
	deleteItem
};