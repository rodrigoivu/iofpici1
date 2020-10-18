const { Schema, model } = require('mongoose');

const EsclusaSchema = new Schema({

	nombre: { type: String,  required: false },
	estado: { type: Boolean, required: false },
	al_oc : { type: Boolean, required: false }
	
});

module.exports = model('Esclusa', EsclusaSchema);