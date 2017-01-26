var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var DayContainer = require('../containers/DayContainer');
var unixToDayOfWeek = require('../helpers/conversions').unixToDayOfWeek;
var weatherIdToIcon = require('../helpers/conversions').weatherIdToIcon;

function styles () {
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

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 55,
  },


};

function Forecast (props) {
  console.log(props);

  return props.isLoading === true
    ? <Loading speed={800} text="Loading" />
    : <div style={{textAlign: 'center', color:'#333'}}>
        <h1 style={{fontSize: 65, fontWeight: 100, marginTop: 50, marginBottom: 30}}>{props.city}</h1>
        <p style={{fontSize: 30, fontWeight:100}}>Select a day</p>
        <div style={styles.container}>

          {props.forecastData.list.map(item => (
            <div key={item.dt} style={styles.dayContainer}>
              <img style={{height:130}} src={weatherIdToIcon(item.weather[0].icon)} alt="Weather" />
              <h2 style={{fontSize:30, fontWeight:100,}}>{unixToDayOfWeek(item.dt)}</h2>
            </div>
          ))}

        {/*<DayContainer forecastData={props.forecastData} />*/}
        {/*<DayContainer forecastData={props.forecastData} />*/}
        {/*<DayContainer forecastData={props.forecastData} />*/}

      </div>
    </div>
}

module.exports = Forecast;
