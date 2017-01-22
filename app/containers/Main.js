var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
};

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <Link to='/' style={styles.link}>
            <h1 style={{margin: 0}}>Weather App</h1>
          </Link>
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
