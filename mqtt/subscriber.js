
const { client }  =  require('./mqttclient');

const { enviarMqtt, setJaulaBD }  =  require('./publish');

const { registraItem } = require('../controllers/alimentacion');
const { itemsTodosLocal } = require('../controllers/linea');

const Alimentacion = require('../models/Alimentacion');
const Doser = require('../models/Doser');
const Jaula = require('../models/Jaula');
const Linea = require('../models/Linea');
const Silo = require('../models/Silo');
const Bloweralarm   = require('../models/Bloweralarm'  );
const Doseralarm    = require('../models/Doseralarm'   );
const Selectoralarm = require('../models/Selectoralarm');

let socketLocal; // se rescata del index.js
let ioLocal; // se rescata del index.js

let AL_array_G ;
let AD_array_G;

const mqttSubscriber = () => {

    //client  = mqtt.connect(process.env.MQTT_PORT);

    client.on('connect',  () => {
        
            client.subscribe({
                'iofish/ciclo' :{ qos:0 },
                'iofish/okguardacalib':{ qos:0 },
                'iofish/cuentamuevedosercalib':{ qos:0 },
				'iofish/okmuevedosercalib' :{ qos:0 },
				'iofish/alarma' :{ qos:0 },
				'iofish/alarmablower':{ qos:0 },
				'iofish/alarmadoser':{ qos:0 },
				'iofish/alarmaselector':{ qos:0 }
            });

    })

     client.on('message', async(topic, message) => {

        let items;
        const itemsLineas = await Linea.find({},{'nombre':1}).sort([['nombre', 1]]);
        try {
           
            items = JSON.parse(message);
        } catch (error) {
            console.log(message.toString());
            console.log("El mensaje no tiene formato JSON")
            return;
        }

        if(topic == 'iofish/ciclo'){

            await pruebaAli_1(items,itemsLineas);
        }
        if(topic == 'iofish/okguardacalib'){
            mensajeOkGuardaCoefCalib(items);
        }
        if(topic == 'iofish/cuentamuevedosercalib'){
            mensajeCuentaMueveDoserCalib(items);
        }
        if(topic == 'iofish/okmuevedosercalib'){
            mensajeOkMueveDoserCalib(items);
		}
		

        if(topic == 'iofish/alarmablower'){
			//console.log(items);
			saveAlarmaBlower(items);
		}
	
		if(topic == 'iofish/alarmadoser'){
				//console.log(items);
			saveAlarmaDoser(items);
		}
	
		if(topic == 'iofish/alarmaselector'){
				//console.log(items);
			saveAlarmaSelector(items);
		}
    
    })
}

// function somePromiseFn(n) {
//     return new Promise((res, rej) => {
//         console.log('d');
//       setTimeout(() => {
//         console.log('e');
//             console.log(itemsCiclo[0].items.A);
//             itemsCiclo.shift();
//             res(n)
//         }, 1 );
//     });
// }

// const analizaListaCiclo= async()=>{
//     console.log(itemsCiclo.length);
//     console.log(itemsCiclo[0].busy);
//     while (itemsCiclo.length > 0) {
//         //console.log('a');
//         if (itemsCiclo[0].busy === false ){
//             console.log('b');
//             itemsCiclo[0].busy=true;
//             const i = await somePromiseFn(1);
//             console.log('c');
//         }
        
//     }
// }



const pruebaAli_1 = async(item, itemsLineas) => {
	

    if(item.I == 1){

        // setJaulaBD(item.A,item.B,0);
		
        const lineaSel =itemsLineas[ item.A - 1 ];
        //console.log(lineaSel);
        
        //QUITAR nombre solo para pruebas
        const jaulas = await Jaula.find({'linea': lineaSel._id},['doser','doser_med','kg_min','ppm','ppv','orden'])
                                  	.populate({
										path:'doser',
										select:'silo',
									})
									.populate({
										path:'doser_med',
										select:'silo',
									})   
                                 	.sort([['orden', 1]]);

        const jaulaSel = jaulas[item.B-1];

        const ts = new Date();
        
        const dadoCicloDoser = [ item.D, item.E ]; //item.D : dado ciclo doser 1 item.E: dado ciclo doser 2
        //hacer for mejorar
        const idSilos = [ jaulaSel.doser.silo, jaulaSel.doser_med.silo ];

        let i=0;                        
        for await ( const silo of Silo.find({'_id':{ $in: idSilos } },['nombre','alimentos','saldo']).populate('alimentos')) {
            if ( dadoCicloDoser[i] > 0 ) {
				let dadoCiclo = dadoCicloDoser[i]/1000;
				let calcSaldoAlim = silo.alimentos[0].saldo - dadoCiclo;
				let idAlimento = silo.alimentos[0].alimento;
				let cantAlim1 = 0;
				let cantAlim2 = 0;

				silo.saldo = silo.saldo - dadoCiclo;
				silo.alimentos[0].saldo = silo.alimentos[0].saldo - dadoCiclo;

				//Eliminar alimento actual
				if( calcSaldoAlim <= 0){

					if( silo.alimentos.length > 1 ){

						if( silo.alimentos[0].saldo > 0 ){
							cantAlim1 = silo.alimentos[0].saldo;
							cantAlim2 = calcSaldoAlim;
						}else{
							cantAlim1 = 0;
							cantAlim2 = dadoCiclo;
						}
						
						//Se elimina alimento actual y se descuenta el saldo del alimento siguiente
						silo.alimentos.shift();
						silo.alimentos[0].saldo = silo.alimentos[0].saldo - cantAlim2;
				  
					}
				}

				await silo.save();
				
				//Guardar dos datos ALim1 Alim2
				let cantFinal = 0;
				let idAlimFinal = '';
				if( cantAlim1 > 0 && cantAlim2 > 0){

					const dataAlim1 = new Alimentacion ({
						jaula    : jaulaSel._id,
						ts       : ts, 
						grs      : cantAlim1,
						kg_min   : jaulaSel.kg_min,
						ppm      : jaulaSel.ppm,
						ppv      : jaulaSel.ppv,
						alimento : idAlimento,
						silo     : silo._id
					});
	
					await dataAlim1.save().then(async() =>{
						const dataAlim2 = new Alimentacion ({
							jaula    : jaulaSel._id,
							ts       : ts, 
							grs      : cantAlim2,
							kg_min   : jaulaSel.kg_min,
							ppm      : jaulaSel.ppm,
							ppv      : jaulaSel.ppv,
							alimento : silo.alimentos[0].alimento,
							silo     : silo._id
						});
						await dataAlim2.save();
					})
				}
				else{

					const dataAlim = new Alimentacion ({
						jaula    : jaulaSel._id,
						ts       : ts, 
						grs      : dadoCicloDoser[i],
						kg_min   : jaulaSel.kg_min,
						ppm      : jaulaSel.ppm,
						ppv      : jaulaSel.ppv,
						alimento : silo.alimentos[0].alimento,
						silo     : silo._id
					});
	
					await dataAlim.save().then(() =>{
						
					})
				}

            }

            i=i+1;
        }
        
        // console.log('listo:' + item.A);
        setJaulaBD(item.A,item.B,2);
	}
	
	mensajeCiclo(item);

	
}


// const detectaAlarmas = (item) => {

	
// 	if(item.T > 0 ){
// 		let AL_array = [
// 			item.T & 1, item.T & 2, item.T & 4, item.T & 8,
// 			item.T & 16, item.T & 32, item.T & 64, item.T & 128,
// 		  ];
// 		if(AL_array != AL_array_G)
// 		console.log(AL_array);
// 	}

// 	if (item.U > 0 ){
// 		let AD_array=[item.U & 1, item.U & 2, item.U & 4, item.U & 8];
// 		console.log(AD_array);
// 	}


// }



const saveJaulaDataToAlimentacion = (item) => {
	
	if(item.BD == 1){
		var jaulaSel;
		var dataAlim = new Alimentacion;
		var ts = new Date();
		Linea.find({}) 
		   .exec(
		   		(err, itemsFound) => {
		   			if (err){
		   				console.log(err);
		   			}else{
		   				var lineaSel=itemsFound[item.LI-1];
		   				//Buscar JAULA
		   				Jaula.find({'linea': lineaSel._id})
		   					.populate({
							   			path: 'doser',
								   		populate:{
								   			path:'silo',
								   		}
								   	})
		   					.populate({
							   			path: 'doser_med',
								   		populate:{
								   			path:'silo',
								   		}
								   	})
		   					.exec(
						   		(err1, itemsFound1) => {
						   			if (err1){
						   				console.log(err1);
						   			}else{
						   				
						   				if (itemsFound1.length >= item.JA){
						   					jaulaSel = itemsFound1[item.JA-1];
							   				var alimento;
							   				var silo;
							   				if(item.MS == 1){  //MS: Medicado Select  1: está seleccionado doser medicado
							   					alimento = jaulaSel.doser_med.silo.alimento;
							   					silo     = jaulaSel.doser_med.silo;

							   				}
							   				if(item.MS == 0){
							   					alimento = jaulaSel.doser.silo.alimento;
							   					silo     = jaulaSel.doser.silo;
							   				}

							   				dataAlim = new Alimentacion({
									   					jaula    : jaulaSel._id,
														ts       : ts, 
														grs      : item.DC,
														kg_min   : jaulaSel.kg_min,
														ppm      : jaulaSel.ppm,
														ppv      : jaulaSel.ppv,
														alimento : alimento,
														silo     : silo
									   				});

							   				var saldoActual = silo.saldo;
							   				var saldoNuevo  = saldoActual - item.DC/1000;
							   				var siloId = silo._id;

							   				//3SE
							   				// var JA = jaulaSel.nombre;
							   				// var KM = jaulaSel.kg_min;
							   				// var PM = jaulaSel.ppm;
							   				// var PV = jaulaSel.ppv;
							   				// var TE = item.DC;
							   				// var AM = item.MS;
							   				// var MA = jaulaSel.manual;
							   				//3SE

							   				//GUARDAR EN ALIMENTACIÓN HISTORUCA
							   				dataAlim.save((err, itemStored) => {
												if(err){
													console.log(err);
												}else{
													if(!itemStored){
														console.log('Imposible actualizar item');
													}else{
														//ACTUALIZAR SILO
														
   														actualizarSilo(siloId,saldoNuevo);

														PublisherController.setJaulaBD(item.LI,item.JA);

														// var ID = itemStored._id;
														// PublisherController.envia3se(JA,KM,PM,PV,TE,AM,ID,MA);

														
													}
												}
											});
											
							   			}else{
							   				PublisherController.setJaulaBD(item.LI,item.JA);
							   			}

						   			}
						   		}
						   	);
		   				
		   			}
		   		}
		   	);
	}
}



const saveAlarmaBlower = (item) =>{
	var ts = new Date();
	Linea.find({}) 
		   .exec(
		   		(err, itemsFound) => {
		   			if (err){
		   				console.log(err);
		   			}else{

		   				var lineaSel=itemsFound[item.LI-1];

		   				if(lineaSel){
		   					//ACTUALIZAR ALARMA
							var alarmablower = new Bloweralarm({
											blower   : lineaSel.blower,
											detalle : item.DT,
											ts      : ts
										});
			   				//GUARDAR EN ALARMAS  HISTORUCA
			   				alarmablower.save((err, itemStored) => {
								if(err){
									console.log(err);
								}else{
									if(!itemStored){
										console.log('Imposible actualizar item');
									}else{
										
								
									}
								}
							});
		   				}
		   			}
		   	});
}

const saveAlarmaDoser = (item) => {
	var doserSel;
	var ts = new Date();
	Linea.find({}) 
		   .exec(
		   		(err, itemsFound) => {
		   			if (err){
		   				console.log(err);
		   			}else{
		   				var lineaSel=itemsFound[item.LI-1];
		   				if (lineaSel){
		   					Doser.find({'linea': lineaSel._id}) 
							   .exec(
							   		(err, itemsFound1) => {
							   			if (err){
							   				console.log(err);
							   			}else{
							   				doserSel = itemsFound1[item.DS-1];
							   				if(doserSel){
							   					//ACTUALIZAR ALARMA
												var alarmadoser = new Doseralarm({
																doser   : doserSel._id,
																detalle : item.DT,
																ts      : ts
															});
								   				//GUARDAR EN ALARMAS  HISTORUCA
								   				alarmadoser.save((err, itemStored) => {
													if(err){
														console.log(err);
													}else{
														if(!itemStored){
															console.log('Imposible actualizar item');
														}else{
															
													
														}
													}
												});
							   				}
							   			}
							   	});
		   				}
		   			}
		   	});
}

const saveAlarmaSelector = (item) => {
	var ts = new Date();
	Linea.find({}) 
		   .exec(
		   		(err, itemsFound) => {
		   			if (err){
		   				console.log(err);
		   			}else{
		   				var lineaSel=itemsFound[item.LI-1];
		   				if (lineaSel) {
		   					//ACTUALIZAR ALARMA
							var alarmaselector = new Selectoralarm({
											selector : lineaSel.selector,
											detalle  : item.DT,
											ts       : ts
										});
			   				//GUARDAR EN ALARMAS  HISTORICA
			   				alarmaselector.save((err, itemStored) => {
								if(err){
									console.log(err);
								}else{
									if(!itemStored){
										console.log('Imposible actualizar item');
									}else{
										
								
									}
								}
							});
		   				}
		   				

		   			}
		   	});
}

const asignarSocket = (socket,io) => {
    socketLocal=socket;
    ioLocal=io;
}
const mensajeCiclo = (data) => {

	if(socketLocal){
		ioLocal.emit('ciclo',{data: data});
	}

}
const mensajeOkGuardaCoefCalib = (data) => {
	if(socketLocal){
		ioLocal.emit('okGuardaCalib',{data: data});
	}
}

const mensajeCuentaMueveDoserCalib = (data) =>{
	if(socketLocal){
		ioLocal.emit('cuentaMueveDoserCalib',{data: data});
	}
}

const mensajeOkMueveDoserCalib = (data) =>{
	if(socketLocal){
		ioLocal.emit('okMueveDoserCalib',{data: data});
	}
}

module.exports = {
	asignarSocket,
    mqttSubscriber
}

