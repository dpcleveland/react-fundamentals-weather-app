var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
};

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={{margin: 0}}>Weather App</h1>
          <GetCityContainer direction={this.props.direction}/>
        </header>
        {this.props.children}
      </div>
    )
  }
});

Main.defaultProps = {
  direction: 'row'
};

module.exports = Main;
