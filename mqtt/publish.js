const { client }  =  require('./mqttclient');

// const enviarMqtt = () => {

//     let dataMqtt = '{ "msg": "hola"}';
//     client.publish('iofish/control', dataMqtt);
// }

const setJaula = (data) => {
	client.publish('iofish/setjaula', data);

}

const setJaulaBD = (LI,JA,valor) => {
    dataBD = '{"LI":'+LI+',"JA":'+JA+',"BD":'+valor+'}';
	client.publish('iofish/setjaulaBD', dataBD);
}

// function envia3se(JA,KM,PM,PV,TE,AM,ID,MA){
//     payload = '{"JA":'+JA+',"KM":'+KM+',"PM":'+PM+',"PV":'+PV+',"TE":'+TE+',"AM":'+AM+',"ID":'+ID+',"MA":'+MA+'}';
//     client.publish('iofish/3se', payload);
// }

const alimentar = ( data )=>{
	client.publish('iofish/alimentar', data);
}

const setCoefCalibrar = ()=>{
	client.publish('iofish/coefcalib', dataSetCoefCalib);
}

const mueveDoserCalibrar = ()=>{
	client.publish('iofish/muevedosercalib', ordenMueveDoserCalib);
}

const enviaPruebaBlower = ()=>{
	client.publish('iofish/pruebablower', dataPruebaBlower);
}

const enviaPruebaDoser = ()=>{
	client.publish('iofish/pruebadoser', dataPruebaDoser);
}

const enviaPruebaSelector = () =>{
	client.publish('iofish/pruebaselector', dataPruebaSelector);
}

const recibeOrden = (socket) => {

	socket.on('recibeOrden', (data) => {
	    dataMqtt=data;	
        enviarMqtt();
    });
    socket.on('setJaula', (data) => {
	    //dataSetJaula=data;	
        setJaula( data );
    });
    socket.on('ordenAlimentar', (data) => {
        ordenAlimentar=data;
        alimentar( data );
    });
    socket.on('setCoefCalib', (data) => {
	    dataSetCoefCalib=data;	
        setCoefCalibrar();
    });
    socket.on('mueveDoserCalib', (data) => {
	    ordenMueveDoserCalib=data;	
        mueveDoserCalibrar();
    });
    socket.on('pruebablower', (data) => {
	    dataPruebaBlower=data;
        enviaPruebaBlower();
    });
    socket.on('pruebadoser', (data) => {
	    dataPruebaDoser=data;	
        enviaPruebaDoser();
    });
    socket.on('pruebaselector', (data) => {
	    dataPruebaSelector=data;	
        enviaPruebaSelector();
    });
}

module.exports = {
    recibeOrden,
    setJaulaBD
};