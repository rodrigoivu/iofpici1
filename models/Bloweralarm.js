const { Schema, model } = require('mongoose');

const BloweralarmSchema = new Schema({

	blower   : { type: Schema.Types.ObjectId,ref:'Blower',   required: false },
	detalle  : { type: String,  required: false },
	ts       : { type: Date  , required: false }, 

});

module.exports = model('Bloweralarm', BloweralarmSchema);