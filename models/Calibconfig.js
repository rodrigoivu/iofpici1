const { Schema, model } = require('mongoose');

const CalibconfigSchema = new Schema({

	tpo1: { type: Number, required: false },
	tpo2: { type: Number,  required: false },
	tpo3: { type: Number,  required: false },
	hz1 : { type: Number,  required: false },
	hz2 : { type: Number,  required: false },
	hz3 : { type: Number,  required: false }
	
},{ collection: 'calibconfig'});

module.exports = model('Calibconfig', CalibconfigSchema);