const { mqttSubscriber } = require('../mqtt/subscriber');
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

const mqttServer = () =>{
    server.listen(port, function () {

        console.log('server started and listening on port ', port);
        mqttSubscriber();
       
      })
}

module.exports = {
    mqttServer
}


