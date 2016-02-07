var StopWatch = React.createClass({
  getInitialState() {
    return {
      elapsed: 0,
      running: false,
      lapTimes: []
    }
  },
  handleStartClick() {
    clearInterval(this.interval);
    this.interval = setInterval(this.updateElapsed, 100);
    this.setState({running: true});
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
  },
  handleLapClick() {
    this.setState({lapTimes: [this.getSeconds(this.state.elapsed)].concat(this.state.lapTimes)});
  },
  getSeconds(elapsed) {
    return elapsed / 10 + (elapsed % 10 ? '' : '.0')
  },
  render() {
    var lapList = this.state.lapTimes.map(function(lapTime, i) {
      return <li key={i}>{lapTime}</li>;
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
        <p>ラップ</p>
        <ul>{lapList}</ul>
      </div>

    );
  }
});

ReactDOM.render(<StopWatch />, document.getElementById('container'));