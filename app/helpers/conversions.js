function unixToDayOfWeek (dt) {

  let date = new Date(dt*1000);

  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let dayOfWeek = days[date.getDay()];

  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let month = months[date.getMonth()];

  let day = date.getDate();

  return dayOfWeek + ', ' + month + ' ' + day;

}

function weatherIdToIcon (id) {
  var imgRoot= 'app/images/weather-icons/';
  var imgEnd= '.svg';

  return (imgRoot + id + imgEnd);

}

module.exports = {
  unixToDayOfWeek: unixToDayOfWeek,
  weatherIdToIcon: weatherIdToIcon
};