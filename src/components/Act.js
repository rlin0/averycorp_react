import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import axios from "axios"
import InputModal from "./UI/InputModal"
import { getBit } from "../helpers"

export default class Act extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: null,
      allowed: null,
      incorrect: false,
    }
  }

  componentDidMount() {
    this.setState({
      allowed: getBit(this.props.act, this.props.id),
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.act !== this.props.act || prevProps.id !== this.props.id) {
      this.setState({
        allowed: getBit(this.props.act, this.props.id),
      })
    }
  }

  handleEnter = () => {
    if (this.state.code === this.props.passcode) {
      this.props.updateAct(this.props.id)
      return true
    } else {
      this.setState({ incorrect: true })
      return false
    }
  }

  render() {
    if (this.state.allowed === false) {
      return (
        <>
          <TextField
            autoFocus
            margin="dense"
            label="code"
            type="text"
            onChange={({ target }) => this.setState({ code: target.value })}
          />
          <Button autoFocus onClick={this.handleEnter} color="primary">
            Submit
          </Button>
          {this.state.incorrect && <p>incorrect!</p>}
        </>
      )
    }
    return this.props.children
  }
}
