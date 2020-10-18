const mqtt = require('mqtt');
//const mqtt = require('async-mqtt');
const client  = mqtt.connect(process.env.MQTT_PORT);

module.exports = {
    client
};


