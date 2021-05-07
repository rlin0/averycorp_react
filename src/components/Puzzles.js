import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import { Link } from "react-router-dom"
import Puzzle from "./Puzzle"

export default class Puzzle1 extends Component {
  render() {
    return (
      <Puzzle puzzleId="1" teamId={this.props.teamId}>
        <p>puzzle 1 description here</p>
      </Puzzle>
    )
  }
}
