import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import {
  Puzzle0_1,
  Puzzle0_2,
  Puzzle0_3,
  Puzzle0_4,
  Puzzle0_5,
} from "./FlowPuzzles"
import Forbidden from "../Forbidden.js"

export default class ElectricalBox extends Component {
  constructor(props) {
    super(props)
    this.state = { solved: 0 }
  }

  updateSolved = () => {
    this.setState({ solved: this.state.solved + 1 })
  }

  render() {
    if (!this.props.electricalBoxUnlocked) return <Forbidden />
    if (this.state.solved === 0) return <Puzzle0_1 solved={this.updateSolved} />
    if (this.state.solved === 1) return <Puzzle0_2 solved={this.updateSolved} />
    if (this.state.solved === 2) return <Puzzle0_3 solved={this.updateSolved} />
    if (this.state.solved === 3) return <Puzzle0_4 solved={this.updateSolved} />
    if (this.state.solved === 4) return <Puzzle0_5 solved={this.updateSolved} />
    this.props.putMCSpy(2)
    this.props.putMCSpy(3)
    return <p>What are you still waiting around for?</p>
  }
}
