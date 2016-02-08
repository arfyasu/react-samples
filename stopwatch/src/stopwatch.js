var StopWatch = React.createClass({
  getInitialState() {
    return {
      elapsed: 0,
      running: false,
      lapTimes: []}
  },
  handleStartClick() {
    clearInterval(this.interval);
    this.interval = setInterval(this.updateElapsed, 100);
    this.setState({running: true});
    this.lastLapTime = 0;
  },
  updateElapsed() {
    this.setState({elapsed: this.state.elapsed + 1 });
  },
  handleStopClick() {
    clearInterval(this.interval);
    this.setState({running: false});
  },
  handleResetClick() {
    this.setState({
      elapsed: 0,
      lapTimes: []
    });
    this.lastLapTime = 0;
  },
  handleLapClick() {
    this.setState({
      lapTimes: [this.currentLapTime()].concat(this.state.lapTimes)
    });
    this.lastLapTime = this.state.elapsed;
  },
  currentLapTime() {
    if (this.lastLapTime == undefined) {
      this.lastLapTime = 0;
    }
    return this.state.elapsed - this.lastLapTime;
  },
  getSeconds(elapsed) {
    return elapsed / 10 + (elapsed % 10 > 0 ? '' : '.0');
  },
  render() {
    var _this = this;
    var lapList = this.state.lapTimes.map(function(lapTime, i) {
      return <li key={i}>Lap{_this.state.lapTimes.length - i} {_this.getSeconds(lapTime)}</li>;
    });
    return (
      <div>
        <p>time: {this.getSeconds(this.state.elapsed)}</p>
        {(this.state.running)
          ? <button onClick={this.handleStopClick}>Stop</button>
          : <button onClick={this.handleStartClick}>Start</button>
        }
        {(this.state.elapsed > 0 && !this.state.running)
          ? <button onClick={this.handleResetClick}>Reset</button>
          : <button onClick={this.handleLapClick} disabled={!this.state.running}>Lap</button>
        }
        <hr/>
        <p>lap time: {this.getSeconds(this.currentLapTime())}</p>
        <p>lapped list: </p>
        <ul>{lapList}</ul>
      </div>

    );
  }
});

ReactDOM.render(<StopWatch />, document.getElementById('container'));