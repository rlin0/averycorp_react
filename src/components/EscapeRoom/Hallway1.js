import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"

const mainRoom = {
  left: "0%",
  top: "43.88%",
  width: "4.92%",
  height: "36.38%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const spyRoom = {
  left: "45.58%",
  top: "57.25%",
  width: "2.67%",
  height: "5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const merchantRoom = {
  left: "83.25%",
  top: "57.38%",
  width: "2.67%",
  height: "5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const library = {
  left: "97.92%",
  top: "42.88%",
  width: "1.92%",
  height: "35%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Hallway1 extends Component {
  render() {
    if (this.props.spyroomUnlocked === null) return null
    return (
      <>
        <img src={S3Url + "/er/Hallway1.png"} width="100%" />
        <Link style={mainRoom} to="/er" />
        <Link style={merchantRoom} to="/er/merchant" />
        <Link style={library} to="/er/library" />

        {this.props.spyroomUnlocked && <Link style={spyRoom} to="/er/spy" />}
      </>
    )
  }
}
