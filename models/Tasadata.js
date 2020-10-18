const { Schema, model } = require('mongoose');

const TasadataSchema = new Schema({

	jaula   : { type: Schema.Types.ObjectId,ref:'Jaula'   ,  required: false },
	alimento: { type: Schema.Types.ObjectId,ref:'Alimento',  required: false },
	silo    : { type: Schema.Types.ObjectId,ref:'Silo'    ,  required: false },
	ts      : { type: Date,   required: false }, 
	kg_min  : { type: Number, required: false },
	ppm     : { type: Number, required: false },
	ppv     : { type: Number, required: false }
	
},{ collection: 'tasadata'});

module.exports = mongoose.model('Tasadata', TasadataSchema);