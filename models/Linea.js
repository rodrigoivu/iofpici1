const { Schema, model } = require('mongoose');

const LineaSchema = new Schema({

	nombre:   { type: String,  required: false },
	color:    { type: String,  required: false }, 
	blower:   { type: Schema.Types.ObjectId,ref:'Blower',   required: false },
	selector: { type: Schema.Types.ObjectId,ref:'Selector', required: false },
	jaula:    { type: Schema.Types.ObjectId,ref:'Jaula',    required: false } // id de jaula actual en ciclo o aliemntando
	
});

module.exports = model('Linea', LineaSchema);