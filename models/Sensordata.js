const { Schema, model } = require('mongoose');

const SensordataSchema = new Schema({
    
	sensor: { type: Schema.Types.ObjectId,ref:'Sensor',required: true },
	ts:     { type: Date,   required: false }, 
    valor:  { type: Number, required: false }
    
},{ collection: 'sensordata'});

module.exports = model('Sensordata', SensordataSchema);