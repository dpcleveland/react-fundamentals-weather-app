var React = require('react');

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
          <h1>Main.js Header</h1>
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
