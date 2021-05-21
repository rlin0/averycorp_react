import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import Header from "./components/UI/Header"
import Login from "./components/Login"
import Act0 from "./components/Act0"
import Act1 from "./components/Act1"
import Act1Spyfall from "./components/Act1Spyfall"
import Profile from "./components/Profile"
import Act2Intro from "./components/Act2Intro"
import Act2 from "./components/Act2"
import Act4 from "./components/Act4"
import Puzzle from "./components/Puzzle"
import { Puzzle3 } from "./components/CrosswordPuzzle"
import Main from "./components/EscapeRoom/Main"
import Mechanics from "./components/EscapeRoom/Mechanics"
import MechanicsCloset from "./components/EscapeRoom/MechanicsCloset"
import ER from "./components/EscapeRoom/Base"
import ERIntro from "./components/EscapeRoom/ERIntro"
import Lockers from "./components/EscapeRoom/Lockers"
import Library from "./components/EscapeRoom/Library"
import Spy from "./components/EscapeRoom/Spy"
import Hallway1 from "./components/EscapeRoom/Hallway1"
import Hallway2 from "./components/EscapeRoom/Hallway2"
import Maintenance from "./components/EscapeRoom/Maintenance"
import ElectricalBox from "./components/EscapeRoom/ElectricalBox"
import Meme from "./components/EscapeRoom/Meme"
import Merchant from "./components/EscapeRoom/Merchant"
import Act from "./components/Act"
import { ThemeProvider } from "@material-ui/core/styles"
import AVERYCORP_THEME from "./components/Theme"
import { setBit } from "./helpers.js"
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
      role: localStorage.getItem("role"),

      intro0Played: false,
      intro2Played: false,
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

  login = (username, userId, teamId, teamName, role) => {
    this.setState({
      username: username,
      userId: userId,
      teamId: teamId,
      teamName: teamName,
      role: role,
    })
    // store the user in localStorage
    localStorage.setItem("username", this.state.username)
    localStorage.setItem("userId", this.state.userId)
    localStorage.setItem("teamId", this.state.teamId)
    localStorage.setItem("teamName", this.state.teamName)
    localStorage.setItem("role", this.state.role)
  }

  logout = () => {
    this.setState({
      username: null,
      userId: null,
      teamId: null,
      teamName: null,
      act: 0,
      role: null,
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

  setIntroPlayed = (id) => {
    this.setState({
      [id]: true,
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
                        Welcome. If you just arrived, begin at Act 00.
                      </div>
                    </Route>
                    <Route exact path="/profile">
                      <Profile userId={this.state.userId} />
                    </Route>
                    <Route exact path="/act0">
                      <Act0
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="0"
                        teamId={this.state.teamId}
                        introPlayed={this.state.intro0Played}
                        setIntroPlayed={this.setIntroPlayed}
                      />
                    </Route>
                    <Route exact path="/act4">
                      <Act
                        id={4}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="whatsnext"
                      >
                        <Act4 />
                      </Act>
                    </Route>
                    <Route exact path="/act1">
                      <Act
                        id={1}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="whereami"
                      >
                        <Act1 userId={this.state.userId} />
                      </Act>
                    </Route>
                    <Route exact path="/act1/spyfall">
                      <Act
                        id={1}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="whereami"
                      >
                        <Act1Spyfall />
                      </Act>
                    </Route>

                    <Route exact path="/act2">
                      <Act
                        id={2}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="gowhere"
                      >
                        <Act2Intro />
                      </Act>
                    </Route>
                    <Route exact path="/act2/map">
                      <Act
                        id={2}
                        act={this.state.act}
                        updateAct={this.updateAct}
                        passcode="gowhere"
                      >
                        <Act2
                          teamId={this.state.teamId}
                          key="2"
                          introPlayed={this.state.intro2Played}
                          setIntroPlayed={this.setIntroPlayed}
                        />
                      </Act>
                    </Route>

                    <Route exact path="/act2/botw">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="1"
                        teamId={this.state.teamId}
                        link="botw"
                      />
                    </Route>

                    <Route exact path="/act2/code">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="2"
                        teamId={this.state.teamId}
                        link="codetrans"
                      />
                    </Route>

                    <Route exact path="/act2/crossword">
                      <Puzzle3
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="3"
                        teamId={this.state.teamId}
                        role={this.state.role}
                      />
                    </Route>

                    <Route exact path="/act2/id">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="4"
                        teamId={this.state.teamId}
                        role={this.state.role}
                        link="id"
                      />
                    </Route>

                    <Route exact path="/act2/spot">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="5"
                        teamId={this.state.teamId}
                        link="spot"
                        role={this.state.role}
                      />
                    </Route>

                    <Route exact path="/act2/meta">
                      <Puzzle
                        act={this.state.act}
                        updateAct={this.updateAct}
                        puzzleId="6"
                        teamId={this.state.teamId}
                        link="meta"
                      />
                    </Route>

                    <Act
                      id={3}
                      act={this.state.act}
                      updateAct={this.updateAct}
                      passcode="imready"
                    >
                      <Route exact path="/er">
                        <ERIntro />
                      </Route>
                      <Route exact path="/er/main">
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
                      <Route exact path="/er/meme">
                        <ER
                          comp={Meme}
                          userId={this.state.userId}
                          teamId={this.state.teamId}
                        />
                      </Route>
                      <Route exact path="/er/electrical">
                        <ER
                          comp={ElectricalBox}
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
