const User = require('../models/User');
const fs = require('fs');

const borrarImagen = ( path ) => {
    if ( fs.existsSync( path ) ) {
        // borrar la imagen anterior
        fs.unlinkSync( path );
    }
}

const imgUpdate = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';
    switch( tipo ) {
        
        case 'user':
            let uimg='sin-archivo.jpg'
            const user = await User.findById(id);
            if ( !user ) {
                console.log('No se encontró un user por id');
                return false;
            }

            if(user.image!==''){
                uimg = user.image;
            }
            
            pathViejo = `./upload/user/${ uimg }`;
            borrarImagen( pathViejo );

            user.image = nombreArchivo;
            await user.save();
            return true;

        break;
    }


}



module.exports = { 
    imgUpdate
}