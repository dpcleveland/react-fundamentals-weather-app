var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (props) {
    return {
      direction: this.props.direction,
      city: ''
    }
  },
  handleSubmitCity: function (event) {
    event.preventDefault();
    var city = this.state.city;
    this.setState({
      city: ''
    });

    this.context.router.push('/forecast/' + this.state.city);

  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    });
  },
  render: function () {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        direction={this.state.direction} />
    )

  }
});

module.exports = GetCityContainer;