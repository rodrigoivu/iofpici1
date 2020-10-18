const { Schema, model } = require('mongoose');

const SiloSchema = new Schema({

	nombre:    { type: String, required: false },
    alimentos: [{
                    saldo: Number,
                    alimento:{
                        type: Schema.Types.ObjectId,
                        ref:'Alimento'
                    }
               }],
	capacidad: { type: Number, required: false },
	saldo:     { type: Number, required: false },
	lim_noti:  { type: Number, required: false }
	
});

module.exports = model('Silo', SiloSchema);