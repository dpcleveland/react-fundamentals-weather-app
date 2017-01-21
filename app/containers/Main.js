var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

var Main = React.createClass({
  getInitialState: function () {
    return {
      direction: 'horizontal'
    }
  },
  render: function() {
    return (
      <div style={styles.container}>
        <header>
          <h1>Weather App</h1>
          <GetCityContainer direction={this.state.direction}/>
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
