var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

function getStyles () {
  return {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 900,
    alignSelf: 'right'
  }
}

function puke (props) {
  return (
    <p>{JSON.stringify(props, null, '')}</p>
  )
}

function Forecast (props) {
  console.log(props);
  return props.isLoading === true
    ? <Loading speed={800} text="Loading" />
    : <div style={getStyles()}>
        {puke(props.forecastData)}
      </div>
}

module.exports = Forecast;
