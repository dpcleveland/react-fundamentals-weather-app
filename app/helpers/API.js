var axios = require('axios');

var key = '909596d3ee2a9067af61958b439c0644';
var baseURL = 'http://api.openweathermap.org/data/2.5/';


function getCurrentWeather (city) {
  return axios.get(baseURL + 'weather?q=' + city + '&type=accurate&APPID=' + key)
    .then(function (currentWeatherData) {
      console.log(currentWeatherData.data)
    });
}

function getFiveDays (city) {
  return axios.get(baseURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5')
    .then(function (fiveDaysData) {
      console.log(fiveDaysData.data)
    });
}

var API = {
  currentWeather: function (city) {
    getCurrentWeather(city);
  },
  fiveDayForecast: function (city) {
    getFiveDays(city);
  }
};

module.exports = API;
