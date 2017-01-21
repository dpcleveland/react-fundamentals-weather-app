var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
};

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <GetCityContainer direction={props.direction} />
    </div>
  )
}

module.exports = Home;
