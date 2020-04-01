import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserCardList from './components/UserCardList';
import UserProfile from './components/UserProfile';

class App extends Component {
  state = {
    userName: '',
    users: []
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { userName } = this.state;
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data.message !== 'Not Found') {
      this.setState({
        users: [...this.state.users, data],
        userName: ''
      });
    } else {
      this.setState({
        userName: ''
      });
    }
  };

  handleChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    const { userName, users } = this.state;
    return (
      <Router>
        <Route path="/" exact>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={this.handleChange}
              placeholder="Search for a username..."
            />
            <button type="submit">Add User Card</button>
          </form>
          <UserCardList users={users} />
        </Route>
        <Route path="/user/:userName?" component={UserProfile} />
      </Router>
    );
  }
}

export default App;
