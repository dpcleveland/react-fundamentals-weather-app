var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  cityInputContainer: {

  },
  cityInput: {

  },
  cityButton: {

  },
  horizontal: {

  },
  vertical: {

  }
};

function GetCity (props) {
  return (
    <div style={styles.cityInputContainer} className={props.direction}>
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
