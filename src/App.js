import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/UI/Header"
import Login from "./components/Login"
import CityIntroScene from "./components/CityIntroScene"
import Act0 from "./components/Act0"
import Act1 from "./components/Act1"
import Profile from "./components/Profile"
import Act2 from "./components/Act2"
import Puzzle from "./components/Puzzle"
import Main from "./components/EscapeRoom/Main"
import Mechanics from "./components/EscapeRoom/Mechanics"
import MechanicsCloset from "./components/EscapeRoom/MechanicsCloset"
import ER from "./components/EscapeRoom/Base"
import Lockers from "./components/EscapeRoom/Lockers"
import Library from "./components/EscapeRoom/Library"
import Spy from "./components/EscapeRoom/Spy"
import Hallway1 from "./components/EscapeRoom/Hallway1"
import Hallway2 from "./components/EscapeRoom/Hallway2"
import Maintenance from "./components/EscapeRoom/Maintenance"
import Merchant from "./components/EscapeRoom/Merchant"
import Act from "./components/Act"
import { ThemeProvider } from "@material-ui/core/styles"
import AVERYCORP_THEME from "./components/Theme"
import { getBit, setBit } from "./helpers.js"
import "./App.css"
import { CssBaseline } from "@material-ui/core"
import Credits from "./components/Credits"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      act: 0,
      username: localStorage.getItem("username"),
      userId: localStorage.getItem("userId"),
      teamId: localStorage.getItem("teamId"),
      teamName: localStorage.getItem("teamName"),
    }
  }

  componentDidMount() {
    if (this.state.teamId !== null) {
      axios
        .get(`/api/team/${this.state.teamId}/`)
        .then((res) => {
          this.setState({ act: parseInt(res.data.act) })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  login = (username, userId, teamId, teamName) => {
    this.setState({
      username: username,
      userId: userId,
      teamId: teamId,
      teamName: teamName,
    })
    // store the user in localStorage
    localStorage.setItem("username", this.state.username)
    localStorage.setItem("userId", this.state.userId)
    localStorage.setItem("teamId", this.state.teamId)
    localStorage.setItem("teamName", this.state.teamName)
  }

  logout = () => {
    this.setState({
      username: null,
      userId: null,
      teamId: null,
      teamName: null,
      act: 0,
    })
    localStorage.clear()
  }

  updateAct = (id) => {
    const updated = setBit(this.state.act, id)
    axios
      .patch(`/api/team/${this.state.teamId}/`, {
        act: updated,
      })
      .then((res) => {
        this.setState({ act: updated })
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    return (
      <ThemeProvider theme={AVERYCORP_THEME}>
        <CssBaseline />

        {this.state.userId === null ? (
          <Login login={this.login} />
        ) : (
          <>
            <CssBaseline />
            <BrowserRouter>
              <div className="terminal">
                <div className="app">
                  <Header
                    username={this.state.username}
                    team={this.state.teamName}
                    logout={this.logout}
                  />
                  <Switch>
                    <Route exact path="/credits">
                      <Credits />
                    </Route>
                    <Route exact path="/">
                      <div className="home">
                        <p>Homepage</p>
                      </div>
                    </Route>
                    <Route exact path="/profile">
                      <Profile userId={this.state.userId} />
                    </Route>
                    <Route exact path="/act0">
                      <Act0 />
                    </Route>
                    <Route exact path="/act1">
                      <Act
                        id={1}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="1"
                      >
                        <Act1 userId={this.state.userId} />
                      </Act>
                    </Route>

                    <Route exact path="/act2">
                      <Act
                        id={2}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="2"
                      >
                        <Act2 teamId={this.state.teamId} key="2" />
                      </Act>
                    </Route>

                    <Route exact path="/act2/puzzle1">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="1"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Route exact path="/act2/puzzle2">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="2"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Route exact path="/act2/puzzle3">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="3"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Route exact path="/act2/puzzle4">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="4"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Route exact path="/act2/puzzle5">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="5"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Route exact path="/act2/puzzle6">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="6"
                        teamId={this.state.teamId}
                      />
                    </Route>

                    <Act
                      id={3}
                      act={this.state.act}
                      updateAct={this.updateAct}
                      passcode="3"
                    >
                      <Route exact path="/er">
                        <ER
                          comp={Main}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/mechanics">
                        <ER
                          comp={Mechanics}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/mechanics_closet">
                        <ER
                          comp={MechanicsCloset}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/lockers">
                        <ER
                          comp={Lockers}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/library">
                        <ER
                          comp={Library}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>

                      <Route exact path="/er/spy">
                        <ER
                          comp={Spy}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>

                      <Route exact path="/er/hallway1">
                        <ER
                          comp={Hallway1}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/hallway2">
                        <ER
                          comp={Hallway2}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>

                      <Route exact path="/er/maintenance">
                        <ER
                          comp={Maintenance}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>

                      <Route exact path="/er/merchant">
                        <ER
                          comp={Merchant}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                    </Act>
                  </Switch>
                </div>
                <div className="scanline"></div>
              </div>
            </BrowserRouter>
          </>
        )}
      </ThemeProvider>
    )
  }
}
