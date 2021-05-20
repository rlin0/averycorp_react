import React, { Component } from "react"
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  withTheme,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import axios from "axios"
import InputModal from "./UI/InputModal"
import { getBit, masterPW } from "../helpers"

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
    if (
      this.state.code === this.props.passcode ||
      this.state.code === masterPW
    ) {
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
        <Card
          square
          raised
          style={{
            position: "relative",
            display: "block",
            width: "30%",
            margin: "auto",
            height: "20%",
            top: "40%",
            padding: "1%",
          }}
        >
          <Typography>Enter the passcode to proceed.</Typography>
          <TextField
            autoFocus
            error={this.state.incorrect}
            helperText={this.state.incorrect ? "Incorrect entry." : null}
            margin="dense"
            label="code"
            type="text"
            onChange={({ target }) => this.setState({ code: target.value })}
            fullWidth
          />
          <Button
            autoFocus
            onClick={this.handleEnter}
            color="primary"
            style={{
              position: "absolute",
              width: "20%",
              left: "40%",
              bottom: "5%",
            }}
          >
            Submit
          </Button>
        </Card>
      )
    }
    return this.props.children
  }
}
