var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      direction: 'vertical'
    }
  },
  render: function () {
    return (
      <Home direction={this.state.direction} />
    )

  }
});

module.exports = HomeContainer;
