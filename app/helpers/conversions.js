function unixToDayOfWeek (dt) {

  let a = new Date(dt*1000);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[a.getDay()];

}

module.exports = {
  unixToDayOfWeek: unixToDayOfWeek
};