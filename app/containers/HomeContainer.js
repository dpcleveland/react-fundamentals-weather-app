var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  render: function () {
    return (
      <Home direction={this.props.direction} />
    )

  }
});

HomeContainer.defaultProps = {
  direction: 'vertical'
};

module.exports = HomeContainer;
