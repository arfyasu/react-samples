var RunningTime = React.createClass({
  render() {
    var elapsed = Math.round((new Date().getTime() - this.props.start) / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    return (
      <p>React has been successfully running {seconds} sec.</p>
    );
  }
});

var start = new Date().getTime();
setInterval(
  function() {
    ReactDOM.render(<RunningTime start={start}/>, document.getElementById('container'))
  }, 100
);
