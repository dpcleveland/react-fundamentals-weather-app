function unixToDayOfWeek (dt) {

  let a = new Date(dt*1000);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[a.getDay()];

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