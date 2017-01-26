var React = require('react');
var Day = require('../components/Day');
var getFiveDays = require('../helpers/API').getFiveDays;

var DayContainer = React.createClass({
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
  render: function (props) {
    return (
      <Day
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecastData={this.state.fiveDaysData} />
    )

  }
});

module.exports = DayContainer;
