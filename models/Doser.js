const { Schema, model } = require('mongoose');

const DoserSchema = new Schema({

	nombre  : { type: String,  required: false },
	estado  : { type: Boolean, required: false },
	linea   : { type: Schema.Types.ObjectId,ref:'Linea',  required: false }, 
	esclusa : { type: Schema.Types.ObjectId,ref:'Esclusa',required: false },
	silo    : { type: Schema.Types.ObjectId,ref:'Silo',   required: false },
	hz      : { type: Number,  required: false },
	calib_x2: { type: Number,  required: false }, //f(x): [grs/seg]
	calib_x : { type: Number,  required: false },
	calib_c : { type: Number,  required: false },
	b0_x2   : { type: Number,  required: false }, //f(x): Hz
	b1_x    : { type: Number,  required: false },
	b2_c    : { type: Number,  required: false }
	
});

module.exports = model('Doser', DoserSchema);