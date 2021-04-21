import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import CityIntroScene from './components/CityIntroScene';
import Act1 from './components/Act1';
import Profile from './components/Profile';
import Map from './components/Map';
import EscapeRoom from './components/EscapeRoom';
import { ThemeProvider } from '@material-ui/core/styles';
import AVERYCORP_THEME from './components/Theme';

import './App.css';
import { Container } from '@material-ui/core';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: null,
      username: localStorage.getItem('username'),
      userId: localStorage.getItem('userId'),
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    if (this.state.userId !== null) {
      axios
        .get(`/api/profile/${this.state.userId}/`)
        .then((res) => {
          this.setState({ progress: res.data.progress });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  login = (username, userId) => {
    this.setState({
      username: username,
      userId: userId,
    });
    // store the user in localStorage
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('userId', this.state.userId);
  };

  logout = () => {
    this.setState({
      username: null,
      userId: null,
    });
    localStorage.clear();
  };

  next = () => {
    this.setState(
      {
        progress: this.state.progress + 1,
      },
      () => {
        axios
          .patch(`/api/profile/${this.state.userId}/`, {
            progress: this.state.progress,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    );
  };

  app = () => {
    switch (this.state.progress) {
      case null:
        return <p>Loading</p>;
      case 0:
        return <CityIntroScene next={this.next} />;
      default:
        return <p>next puzzle here</p>;
    }
  };

  render() {
    if (this.state.userId === null) {
      return <Login login={this.login} />;
    }
    return (
      <ThemeProvider theme={AVERYCORP_THEME}>
        <BrowserRouter>
          <div id="App">
            <Header username={this.state.username} logout={this.logout} />
            <Switch>
              <Route exact path="/"> {this.app()} </Route>
              <Route exact path="/map"><Map /></Route>
              <Route path="/escaperoom"><EscapeRoom /></Route>
              <Route path="/act1"><Act1 username={this.state.username} /></Route>
              <Route path="/profile"><Profile username={this.state.username} /></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
