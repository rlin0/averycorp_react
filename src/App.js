import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/UI/Header';
import Login from './components/Login';
import CityIntroScene from './components/CityIntroScene';
import Act0 from './components/Act0';
import Act1 from './components/Act1';
import Profile from './components/Profile';
import Map from './components/Map';
import Puzzle from './components/Puzzle';
import Main from './components/EscapeRoom/Main';
import Mechanics from './components/EscapeRoom/Mechanics';

import { ThemeProvider } from '@material-ui/core/styles';
import AVERYCORP_THEME from './components/Theme';

import './App.css';
import { CssBaseline } from '@material-ui/core';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: null,
      username: localStorage.getItem('username'),
      userId: localStorage.getItem('userId'),
      teamId: localStorage.getItem('teamId'),
    };
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

  login = (username, userId, teamId) => {
    this.setState({
      username: username,
      userId: userId,
      teamId: teamId,
    });
    // store the user in localStorage
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('userId', this.state.userId);
    localStorage.setItem('teamId', this.state.teamId);
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
        return <p>next stage here</p>;
    }
  };

  render() {
    return (
      <ThemeProvider theme={AVERYCORP_THEME}>
        {this.state.userId === null ? (
          <Login login={this.login} />
        ) : (
          <>
            <CssBaseline />
            <BrowserRouter>
              <div class="terminal">
                <div class="app">
                  <Header username={this.state.username} logout={this.logout} />
                  <Switch>
                    <Route exact path="/">
                      {' '}
                      {this.app()}{' '}
                    </Route>
                    <Route exact path="/map">
                      <Map teamId={this.state.teamId} />
                    </Route>
                    <Route path="/escaperoom">
                      <Main />
                    </Route>
                    <Route path="/act0">
                      <Act0 userId={this.state.userId} />
                    </Route>
                    <Route path="/act1">
                      <Act1 userId={this.state.userId} />
                    </Route>
                    <Route path="/profile">
                      <Profile userId={this.state.userId} />
                    </Route>
                    <Route path="/puzzle">
                      <Puzzle puzzleId="1" userId={this.state.userId} />
                    </Route>
                    <Route exact path="/escaperoom/mechanics">
                      <Mechanics teamId={this.state.teamId} />
                    </Route>
                  </Switch>
                </div>
                <div class="scanline"></div>
              </div>
            </BrowserRouter>
          </>
        )}
      </ThemeProvider>
    );
  }
}
