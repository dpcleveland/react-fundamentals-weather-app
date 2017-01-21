var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  cityInputContainer: {

  },
  cityInput: {
    padding: 10,
    margin: 10,
  },
  cityButton: {
    padding: 10,
  },
  horizontal: {
    display: 'inline',
    float: 'right',
  },
  vertical: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-block',
    width: 30,

  }
};

function GetCity (props) {
  return (
    // TODO maybe move the ternary outside and return two different divs?
    <div style={props.direction === 'horizontal' ? styles.horizontal : styles.vertical}>
      <form onSubmit={props.onSubmitCity}>
        <input style={styles.cityInput} onChange={props.onUpdateCity} placeholder="City, State" type="text" value={props.city} />
        <button style={styles.cityButton} type="submit">Get Weather</button>
      </form>
    </div>
  )
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
}

module.exports = GetCity;
