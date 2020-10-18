const { Schema, model } = require('mongoose');

const PlanSchema = new Schema({

    plan:         { type: Schema.Types.ObjectId,ref:'Growthmodel',  required: false },
    especie:      { type: String, required: false },
	temperatura:  { type: Number, required: false },
	fecha:        { type: Date  , required: false },
	inialim:      { type: String, required: false },
	finalim:      { type: String, required: false },
	hrsnoalim:    { type: Number, required: false },
	hrsdisponible:{ type: Number, required: false },
	hrsefectivas: { type: Number, required: false },
	centro :      { type: String, required: false },
	idcentro :    { type: String, required: false },
	minutosVisita:{ type: Number, required: false },
	
},{ collection: 'plan'});

module.exports = model('Plan', PlanSchema);