const mongoose = require('mongoose');
const { mqttServer } = require('../mqtt/broker');
const plan = require('../controllers/plan');
const configcalibracion = require('../controllers/calibconfig');
const blucontrol = require('../controllers/blucontrol');

const dbConnection = async() => {

    try{
        await mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser:    true,
            useUnifiedTopology: true,
            useCreateIndex:     true,
            useFindAndModify:   false
        });

        console.log('La conexión a la base de datos está funcionando correctamente...');
        mqttServer();
        plan.crearItem();
	    configcalibracion.crearItem();
	    blucontrol.crearItem();

    } catch (error){
        console.log(error);
        throw new Error('Error al iniciar Base de Datos');
    }
}

module.exports = {
    dbConnection
}