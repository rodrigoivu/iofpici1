const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name:    {
        type:String,
        required: true
    },
    email:    {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:     {
        type: String, 
        required: true, 
        default: 'INITIAL_ROLE', 
    },
	image:    {
        type: String, 
        required: false, 
        default: '' 
    },
	estado:   { 
        type: Number, 
        required: false, 
        default: 1  
    },
	services: { 
        type: String, 
        required: false, 
        default: '0'
    } 

});

module.exports = model('User', UserSchema);
