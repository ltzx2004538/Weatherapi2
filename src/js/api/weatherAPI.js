// import Weather from './weatherClass';

const axios = require('axios');
const Weather = require ('./weatherClass');

const openWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',        
});


function requestWeather (location,appID,weatherType) {  
    const route = (weatherType === 'forecast')? '/forecast':'/weather';
    const response = openWeather.get(route, {
        params: { 
            q: location,
            units:'metric',
            APPID:appID
        }
    });
    return response;
}

function getWeather(country,city){
    const location =  `${city}, ${country}`;
    console.log(location)
    const appID = "efd9340c2df40f1ef18b9a8044360406";
    return Promise.all([requestWeather(location,appID), requestWeather(location,appID,'forecast')])
    .then((responseArray) =>{
        const today = responseArray[0];
        const forecast = responseArray[1];
        const currentInfo = new Weather(today.data);  
        const city = forecast.data.city.name;
        const country = forecast.data.city.country;
        const data = {currentInfo,city,country};
        return data
    })
    .catch(err => {
        console.log(err.message);
    });
}


// getWeather('AU','Sydney')

export default getWeather;