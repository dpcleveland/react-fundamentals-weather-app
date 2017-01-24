var axios = require('axios');

var key = '909596d3ee2a9067af61958b439c0644';
var baseURL = 'http://api.openweathermap.org/data/2.5/';


function getCurrentWeather (city) {
  return axios.get(baseURL + 'weather?q=' + city + '&type=accurate&APPID=' + key)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    });
}

function getFiveDays (city) {
  return axios.get(baseURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5')
    .then(function (fiveDaysData) {
      return fiveDaysData.data
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getFiveDays: getFiveDays
};