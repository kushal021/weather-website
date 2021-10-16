const request = require('request');

const forCast = (cityName, callback) =>{
    const url = "http://api.weatherapi.com/v1/current.json?key=17189d517c7a435898541012211709&q=" + encodeURIComponent(cityName) + "&aqi=no";
    
    request({ url, json: true}, (error, {body}= {})=>{
        if (error) {
            callback('Unable to connect to Network!', undefined);
        } else if (body.error) {
            callback('Unable to find Location!', undefined)
        }else{
            callback(undefined, {body})
        }
    })
}

module.exports = forCast;