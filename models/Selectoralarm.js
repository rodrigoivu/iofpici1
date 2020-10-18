const { Schema, model } = require('mongoose');

const SelectoralarmSchema = new Schema({

	selector : { type: Schema.Types.ObjectId,ref:'Selector', required: false },
	detalle  : { type: String, required: false },
	ts       : { type: Date  , required: false }, 
	
});

module.exports = model('Selectoralarm', SelectoralarmSchema);