import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"

export default class Spy extends Component {
  render() {
    return <>{this.props.sewerUnlocked ? <p>spy room</p> : <p> locked </p>}</>
  }
}
