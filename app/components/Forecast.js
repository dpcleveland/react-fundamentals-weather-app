var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var DayContainer = require('../containers/DayContainer');
var unixToDayOfWeek = require('../helpers/conversions').unixToDayOfWeek;
var weatherIdToIcon = require('../helpers/conversions').weatherIdToIcon;

function getStyles () {
  return {
    marginTop: 30,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
}

function Forecast (props) {
  console.log(props);

  return props.isLoading === true
    ? <Loading speed={800} text="Loading" />
    : <div style={getStyles()}>
        <ul>
          {props.forecastData.list.map(item => (
            <li key={item.dt}>Icon: <img src={weatherIdToIcon(item.weather[0].icon)} /> Day: {unixToDayOfWeek(item.dt)}</li>
          ))}
        </ul>


        {/*<DayContainer forecastData={props.forecastData} />*/}
        {/*<DayContainer forecastData={props.forecastData} />*/}
        {/*<DayContainer forecastData={props.forecastData} />*/}



    </div>
}

module.exports = Forecast;
