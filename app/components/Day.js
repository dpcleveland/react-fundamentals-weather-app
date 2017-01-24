var React = require('react');

function dayStyles () {
  return {
    marginBottom: 100,
    maxWidth: 250,
    marginLeft: 10,
    marginRight: 10,
  }
}

function Day (props) {
  return (
    <div style={dayStyles()}>{JSON.stringify(props.forecastData, null, ' ')}</div>
  )
}

module.exports = Day;
