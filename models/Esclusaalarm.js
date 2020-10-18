const { Schema, model } = require('mongoose');

const EsclusaalarmSchema = new Schema({

	esclusa  : { type: Schema.Types.ObjectId,ref:'Esclusa', required: false },
	detalle  : { type: String, required: false },
	ts       : { type: Date  , required: false }, 
	
	
});

module.exports = model('Esclusaalarm', EsclusaalarmSchema);