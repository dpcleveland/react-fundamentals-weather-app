var React = require('react');
var Forecast = require('../components/Forecast');
var getFiveDays = require('../helpers/API').getFiveDays;


var ForecastContainer = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {},
    }
  },
  componentDidMount: function () {
    this.makeDataRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeDataRequest(nextProps.routeParams.city)
  },
  makeDataRequest: function (city) {
    getFiveDays(city)
      .then(function (fiveDaysData) {
        this.setState({
          isLoading: false,
          fiveDaysData: fiveDaysData
        });
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecastData={this.state.fiveDaysData} />
    )

  }
});

module.exports = ForecastContainer;
