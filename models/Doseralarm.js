const { Schema, model } = require('mongoose');

const DoseralarmSchema = new Schema({

	doser    : { type: Schema.Types.ObjectId,ref:'Doser', required: false },
	detalle  : { type: String,  required: false },
    ts       : { type: Date  , required: false }, 
    
});

module.exports = model('Doseralarm', DoseralarmSchema);