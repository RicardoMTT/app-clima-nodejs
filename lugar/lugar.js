const axios = require('axios');

const getLugarLatLng = async (dir) =>{
        
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'x-rapidapi-key': '82610310c2mshca4fe3fcbaf5a89p14a2bcjsnf4fafe184857'}
    });

    const resp = await instance.get();
    
    if(resp.data.Results.length === 0){
        throw new Error('No se encontro datos');
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return{
        direccion,
        lat,
        lng
    }
  
}

module.exports = {
    getLugarLatLng
}