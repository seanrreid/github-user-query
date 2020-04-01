import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  state = {
    repoList: []
  };

  async componentDidMount() {
    const { userName } = this.props.match.params;
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const repoList = await response.json();

    this.setState({
      repoList
    });
  }

  render() {
    const { repoList } = this.state;
    return (
      <>
        <Link to="/">Home</Link>
        <ul>
          {repoList.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default UserProfile;
