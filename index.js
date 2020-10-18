const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const socket = require('socket.io');
const subscriberMqtt = require('./mqtt/subscriber');
const publishMqtt    = require('./mqtt/publish');
const sgr = require('./sgr/sgr');
//Crear Servidor de express
const app = express();

//Conexión a base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio FRONT IOFISH
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/user'         , require('./routes/user'         ));
app.use('/api/upload'       , require('./routes/upload'       )); 
app.use('/api/alimentacion' , require('./routes/alimentacion' ));
app.use('/api/alimento'     , require('./routes/alimento'     ));
app.use('/api/blower'       , require('./routes/blower'       ));
app.use('/api/bloweralarm'  , require('./routes/bloweralarm'  ));
app.use('/api/blucontrol'   , require('./routes/blucontrol'   ));
app.use('/api/calibconfig'  , require('./routes/calibconfig'  ));
app.use('/api/calibdata'    , require('./routes/calibdata'    ));
app.use('/api/doser'        , require('./routes/doser'        ));
app.use('/api/doseralarm'   , require('./routes/doseralarm'   ));
app.use('/api/esclusa'      , require('./routes/esclusa'      ));
app.use('/api/esclusaalarm' , require('./routes/esclusaalarm' ));
app.use('/api/growthmodel'  , require('./routes/growthmodel'  ));
app.use('/api/jaula'        , require('./routes/jaula'        ));
app.use('/api/linea'        , require('./routes/linea'        ));
app.use('/api/plan'         , require('./routes/plan'         ));
app.use('/api/selector'     , require('./routes/selector'     ));
app.use('/api/selectoralarm', require('./routes/selectoralarm'));
app.use('/api/sensor'       , require('./routes/sensor'       ));
app.use('/api/sensordata'   , require('./routes/sensordata'   ));
app.use('/api/silo'         , require('./routes/silo'         ));
app.use('/api/silodata'     , require('./routes/silodata'     ));
app.use('/api/tasadata'     , require('./routes/silodata'     ));

//Escuchar peticiones de Express
const server = app.listen(process.env.PORT, () =>{

    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);

} )

const io = socket.listen(server,{
    path: '/evento/socket.io'
});

io.sockets.on('connection', (socket) => { 
    subscriberMqtt.asignarSocket(socket,io);
    publishMqtt.recibeOrden(socket);
});