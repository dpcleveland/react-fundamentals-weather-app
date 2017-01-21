var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
};

// TODO Change direction prop to state instead of static

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <header>
          <h1>Weather App</h1>
          <GetCityContainer direction="horizontal"/>
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
