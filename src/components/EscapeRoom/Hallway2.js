import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import LockModal from "../UI/LockModal"
import Window from "../UI/Window"

const mainRoom = {
  left: "94.92%",
  top: "43.63%",
  width: "5.08%",
  height: "36.13%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const maintenanceRoom = {
  left: "0%",
  top: "42.63%",
  width: "2%",
  height: "34.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const mechanicsRoom = {
  left: "14.25%",
  top: "57.13%",
  width: "2.42%",
  height: "5.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const mcsuRoom = {
  left: "51.92%",
  top: "57%",
  width: "2.42%",
  height: "5.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const window = {
  left: "30.08%",
  top: "50.25%",
  width: "17.75%",
  height: "14%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Hallway2 extends Component {
  constructor(props) {
    super(props)
    this.state = { window: false, anchorEl: null }
  }

  handleSubmitMechanics = (code) => {
    if (code === "0" || code === "X66R19") {
      this.props.putMechanicsUnlocked()
      return true
    } else return false
  }

  lockedMechanics = () => {
    return (
      <LockModal
        style={mechanicsRoom}
        handleSubmit={this.handleSubmitMechanics}
      />
    )
  }
  render() {
    if (this.props.mechanicsUnlocked === null) return null

    return (
      <>
        <img src={S3Url + "/er/Hallway2.png"} width="100%" />
        <Link style={mainRoom} to="/er" />
        <Link style={maintenanceRoom} to="/er/maintenance" />

        <Window style={window} link={S3Url + "/er/window_mechanic.png"} />
        {this.props.mechanicsUnlocked ? (
          <Link style={mechanicsRoom} to="/er/mechanics" />
        ) : (
          this.lockedMechanics()
        )}
      </>
    )
  }
}
