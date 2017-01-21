var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <header>
          <h1>Weather App</h1>
          <GetCityContainer direction={this.props.direction}/>
        </header>
        {this.props.children}
      </div>
    )
  }
});

Main.defaultProps = {
  direction: 'horizontal'
};

module.exports = Main;
