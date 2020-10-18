const { Schema, model } = require('mongoose');

const AlimentoSchema = new Schema({

	nombre       : { type: String,  required: false },
	empresa      : { type: String,  required: false }, 
	codigo       : { type: String,  required: false },
	medicado     : { type: Boolean, required: false },
	ppk          : { type: Number,  required: false },
	id_empresa   : { type: Number,  required: false },
	
});

module.exports = model('Alimento', AlimentoSchema);