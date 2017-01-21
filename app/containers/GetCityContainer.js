var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    });
    console.log('handleUpdateCity after setState:', this.state.city)

  },
  handleSubmitCity: function (event) {
    event.preventDefault();
    console.log('handleSubmitCity before setState:', this.state.city)
    var city = this.state.city;
    this.setState({
      city: ''
    });
    console.log('handleSubmitCity after setState:', this.state.city)
    this.context.router.push('/forecast/' + this.state.city);
  },
  render: function () {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        direction={this.props.direction} />
    )

  }
});

module.exports = GetCityContainer;