const { Schema, model } = require('mongoose');

const BlucontrolSchema = new Schema({

	url_blucontrol: { type: String, required: false },
	username      : { type: String,  required: false },
	password      : { type: String,  required: false },
	token         : { type: String,  required: false }
	
},{ collection: 'blucontrol'});

module.exports = model('Blucontrol', BlucontrolSchema);