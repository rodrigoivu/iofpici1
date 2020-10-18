const { Schema, model } = require('mongoose');

const SilodataSchema = new Schema({

	silo       : { type: Schema.Types.ObjectId,ref:'Silo'    , required: false },
	// user       : { type: Schema.Types.ObjectId,ref:'User'    , required: false },
	// user       : { type: String, required: false },
	alimento   : { type: Schema.Types.ObjectId,ref:'Alimento', required: false },
	ts         : { type: Date  , required: false }, 
	ingreso    : { type: Number, required: false },
	trasvasije : { type: Number, required: false },
	vaciado    : { type: Boolean,required: false }
	
},{ collection: 'silodata'});

module.exports = model('Silodata', SilodataSchema);

//user: string para aplicacion sin usuario