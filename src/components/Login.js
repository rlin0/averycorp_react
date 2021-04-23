import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      incorrect: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get('/api/login/', {
        params: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        if (res.data.success) {
          if (res.data.loggedIn) this.props.login(res.data.user.username, res.data.user.id, res.data.user.teamId);
          else this.setState({ incorrect: true });
        } else console.error(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>{this.state.incorrect && <p>Incorrect login!</p>}</div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={this.state.username}
          onChange={({ target }) => this.setState({ username: target.value })}
        />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
