const axios = require('axios');

const getClima = async(lat,lng) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&&appid=8e4e8874ae11689f28efa628f01e0c69
    `)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}