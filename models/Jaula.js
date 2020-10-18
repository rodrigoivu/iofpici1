const { Schema, model } = require('mongoose');

const JaulaSchema = new Schema({

    nombre:        { type: String,  required: false },
    aliasJaula:    { type: String,  required: false },
    estado:        { type: Boolean, required: false },
	linea:         { type: Schema.Types.ObjectId,ref:'Linea',    required: false },
	doser:         { type: Schema.Types.ObjectId,ref:'Doser',    required: false },
	doser_med:     { type: Schema.Types.ObjectId,ref:'Doser',    required: false }, 
    hz_blower:     { type: Number,  required: false },
    orden:         { type: Number,  required: false },
    kg_tot:        { type: Number,  required: false },
    kg_visita:     { type: Number,  required: false },
    obj_med:       { type: Number,  required: false }, //Objetivo correspondiente a medicado en %
    en_ciclo:      { type: Boolean, required: false },
    med_sel:       { type: Boolean, required: false }, //Indica si está alimentando con el objetivo de medicado. true:con medicado false: normal
    manual:        { type: Boolean, required: false },
    dado:  		   { type: Number,  required: false },
	visitas:       { type: Number,  required: false },
    visita_actual: { type: Number,  required: false },
    min_visita:    { type: Number,  required: false },
	kg_min:        { type: Number,  required: false },
	fa_sfr:        { type: Number,  required: false },
	ppv:           { type: Number,  required: false },
	ppm:           { type: Number,  required: false },
	peces:         { type: Number,  required: false },
	peso:          { type: Number,  required: false },
	pos_selector:  { type: Number,  required: false },
	tpo_sop    :   { type: Number,  required: false },
	posx:          { type: Number,  required: false },
	posy:          { type: Number,  required: false },
	tipo:          { type: String,  required: false }, 
	largo:         { type: Number,  required: false },
	ancho:         { type: Number,  required: false },
	alto:          { type: Number,  required: false },
	diametro:      { type: Number,  required: false },
	sgr:		   { type: Number,  required: false },
	categoria:     { type: Number,  required: false }

});

module.exports = model('Jaula', JaulaSchema);