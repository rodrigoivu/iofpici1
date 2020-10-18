const { Schema, model } = require('mongoose');

const CalibdataSchema = new Schema({

	doser    : { type: Schema.Types.ObjectId,ref:'Doser', required: false },
	// user     : { type: Schema.Types.ObjectId,ref:'User' , required: false },
	alimento : { type: Schema.Types.ObjectId,ref:'Alimento' , required: false },
	ts       : { type: Date  , required: false }, 
	tpo1     : { type: Number, required: false },
	tpo2     : { type: Number, required: false },
	tpo3     : { type: Number, required: false },
	hz1      : { type: Number, required: false },
	hz2      : { type: Number, required: false },
	hz3      : { type: Number, required: false },
	grs1     : { type: Number, required: false },
	grs2     : { type: Number, required: false },
	grs3     : { type: Number, required: false },
	a0       : { type: Number, required: false },
	a1       : { type: Number, required: false },
	a2       : { type: Number, required: false },
	b0       : { type: Number, required: false },
	b1       : { type: Number, required: false },
	b2       : { type: Number, required: false },
	
},{ collection: 'calibdata'});

module.exports = model('Calibdata', CalibdataSchema);