var Users = React.createClass({
  getInitialState() {
    return {
      users: [
        {id: 1, name: 'BOB'},
        {id: 2, name: 'TOM'}
      ]
    }
  },
  render() {
    var userList = this.state.users.map(function(user) {
      return <User id={user.id} name={user.name} key={user.id} />;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    );
  }
});


var User = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <tr>
        <td>{this.props.id}</td><td>{this.props.name}</td>
      </tr>
    );
  }
});

ReactDOM.render(<Users />, document.getElementById('container'));