import React, { Component } from "react";
import UserCardList from "./components/UserCardList";

class App extends Component {
  state = {
    userName: "",
    users: [],
  };

  loadData = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { userName } = this.state;

    const data = await this.loadData(userName);

    if (data.message !== "Not Found") {
      this.setState({
        users: [...this.state.users, data],
        userName: "",
      });
    } else {
      this.setState({
        userName: "",
      });
    }
  };

  handleChange = (name) => {
    this.setState({
      userName: name,
    });
  };

  render() {
    const { userName, users } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            value={userName}
            onChange={(event) => this.handleChange(event.target.value)}
            placeholder="Search for a username..."
          />
          <button type="button" onClick={this.handleSubmit}>
            Add User Card
          </button>
        </form>
        <UserCardList users={users} />
      </>
    );
  }
}

export default App;
