const { Schema, model } = require('mongoose');

const BlowerSchema = new Schema({

    nombre : { type: String,  required: false },
    estado : { type: Boolean, required: false },
	hz     : { type: Number,  required: false },
	rpm    : { type: Number,  required: false },
	pid    : { type: Boolean, required: false },
	caudal : { type: Number,  required: false }
	
});


module.exports = model('Blower', BlowerSchema);