var Task = React.createClass({
  propTypes: {
    task: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      finished: React.PropTypes.bool.isRequired
    }),
    onFinish: React.PropTypes.func.isRequired
  },
  onClickFinishButton() {
    this.props.onFinish(this.props.task.id);
  },
  render() {
    return (
      <div>
        {(() => {
          if (this.props.task.finished) {
            return <p><s>{this.props.task.name}</s></p>;
          } else {
            return (
              <p>
                <span>{this.props.task.name}</span>
                <button onClick={this.onClickFinishButton}>finish!</button>
              </p>
            );
          }
        })()}
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState() {
    return {
      tasks: [
        {id: 1, name: 'タスク1', finished: false},
        {id: 2, name: 'タスク2', finished: false},
        {id: 3, name: 'タスク3', finished: false}
      ]
    };
  },
  finishTask(taskId) {
    this.setState({
      tasks: this.state.tasks.map( task => {
        if (task.id === taskId) {
          task.finished = true;
        };
        return task;
      })
    });
  },
  render() {
    var tasks = this.state.tasks.map( task => {
      return <li key={task.id}><Task onFinish={this.finishTask} task={task} /></li>;
    });
    return <ul>{tasks}</ul>;
  }
});

ReactDOM.render(<TodoList />, document.getElementById('container'));