import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      incorrect: false,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .get("/api/login/", {
        params: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        if (res.data.success) {
          if (res.data.loggedIn)
            this.props.login(
              res.data.user.username,
              res.data.user.id,
              res.data.user.teamId,
              res.data.user.teamName
            )
          else this.setState({ incorrect: true })
        } else console.error(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <img
            src={require(`../images/logo2_fill_w.svg`).default}
            alt="logo"
            className="center"
          />
          <label htmlFor="username">LOGIN ID </label>
          <input
            type="text"
            value={this.state.username}
            onChange={({ target }) => this.setState({ username: target.value })}
          />
          <div>
            <label htmlFor="password">PASSWORD </label>
            <input
              type="password"
              value={this.state.password}
              onChange={({ target }) =>
                this.setState({ password: target.value })
              }
            />
          </div>
          <div className="incorrect">
            {this.state.incorrect && <p>Incorrect login.</p>}
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    )
  }
}
