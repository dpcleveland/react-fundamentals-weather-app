var axios = require('axios');

var key = '909596d3ee2a9067af61958b439c0644';

function getCurrentWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key);
}

function getFiveDays (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + key + '&cnt=5');
}

var helpers = {
  currentWeather: function () {

  },
  fiveDayForecast: function () {

  }
};

module.exports = helpers;


var curWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key;
