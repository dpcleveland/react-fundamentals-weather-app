var React = require('react');
var PropTypes = React.PropTypes;

function getStyles () {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 900,
    alignSelf: 'right'
  }
}

function puke (props) {
  return (
    <p>Forecast component</p>
  )
}

function Forecast (props) {
  return (
    <div style={getStyles()}>
      {puke(props)}
    </div>
  )
}

Forecast.propTypes = {

};

module.exports = Forecast;
