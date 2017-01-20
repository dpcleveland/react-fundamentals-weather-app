var React = require('react');

var styles = {
  cityInputContainer: {

  },
  cityInput: {

  },
  cityButton: {

  }
};

function GetCity (props) {
  return (
    <div style={styles.cityInputContainer}>
      <input style={styles.cityInput} />
      <button style={styles.cityButton}></button>
    </div>
  )
}

module.exports = GetCity;
