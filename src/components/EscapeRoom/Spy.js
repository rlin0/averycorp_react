import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import Forbidden from "../Forbidden"

export default class Spy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <>{this.props.sewerUnlocked ? <p>spy room</p> : <Forbidden />}</>
  }
}
