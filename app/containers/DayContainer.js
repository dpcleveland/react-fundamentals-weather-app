var React = require('react');
var Day = require('../components/Day');

var DayContainer = React.createClass({
  render: function (props) {
    return (
      <div>
        <Day forecastData={this.props.forecastData} />
      </div>
    )

  }
});

module.exports = DayContainer;
