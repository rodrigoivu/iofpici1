const { Schema, model } = require('mongoose');

const SensorSchema = new Schema({

	nombre: { type: String, required: false },
	tipo:   { type: String, required: false }, 
	valor:  { type: Number, required: false },
	min:    { type: Number, required: false },
	max:    { type: Number, required: false },
	unidad: { type: String, required: false },
	lim_up: { type: Number, required: false },
	lim_dw: { type: Number, required: false },
	posx:   { type: Number, required: false },
	posy:   { type: Number, required: false },
	
},{ collection: 'sensor'});

module.exports = model('Sensor', SensorSchema);