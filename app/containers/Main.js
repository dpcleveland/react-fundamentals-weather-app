var React = require('react');
var GetCityContainer = require('./GetCityContainer');
var Link = require('react-router').Link;

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
    filter: 'hue-rotate(190deg) saturate(1)',
    color: '#fff',
    padding: 5,
  }
};

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Link to="/"><h2 style={{margin: 0, marginLeft: 15, color: '#fff'}}>Weather App</h2></Link>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
