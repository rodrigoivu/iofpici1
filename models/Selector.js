const { Schema, model } = require('mongoose');

const SelectorSchema = new Schema({

	nombre:   { type: String,  required: false },
	pos: 	  { type: Number,  required: false },
	pos_max:  { type: Number,  required: false }, 
	pos_obj:  { type: Number,  required: false },
	estado:   { type: Boolean, required: false },
	dir: 	  { type: Boolean, required: false },
	t_pos: 	  { type: Number,  required: false },
	al_oc: 	  { type: Boolean, required: false },
	al_calib: { type: Boolean, required: false }
	
},{ collection: 'selector'});


module.exports = model('Selector', SelectorSchema);