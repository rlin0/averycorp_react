import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import { withRouter, Link } from "react-router-dom"

const mainRoom = {
  width: "5.7%",
  height: "7.3%",
  left: "5.4%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const spyRoom = {
  width: "15.8%",
  height: "52.1%",
  left: "2.1%",
  top: "21.1%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const merchantRoom = {
  width: "15.6%",
  height: "52.1%",
  left: "60.4%",
  top: "20.7%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const library = {
  width: "5.3%",
  height: "7.1%",
  left: "90.3%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Hallway1 extends Component {
  render() {
    return (
      <>
        <img src="/media/Hallway1.png" width="100%" />
        <Link style={mainRoom} to="/er" />
        <Link style={merchantRoom} to="/er/merchant" />
        <Link style={library} to="/er/library" />

        {this.props.sewerUnlocked && <Link style={spyRoom} to="/er/spy" />}
      </>
    )
  }
}
