const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;


const getInfo = async(direccion) => {
    try{
        console.log('1');
        const coords = await lugar.getLugarLatLng(direccion);
        console.log('2');
        const temperatura = await clima.getClima(coords.lat,coords.lng);
        return temperatura;
    }catch(e){
        return console.log(e);
    }
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);

/*
lugar.getLugarLatLng(argv.direccion)
        .then(console.log);


clima.getClima(-5.710000,-79.279999)
        .then(console.log)
        .catch(console.log);
*/