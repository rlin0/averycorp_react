import React, { Component } from "react"
import {
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  IconButton,
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import { styles } from "../UI/InputModal"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import LockModal from "./LockModal"

const mainRoom = {
  width: "5.9%",
  height: "7.6%",
  left: "89.9%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const maintenanceRoom = {
  width: "6.8%",
  height: "9.3%",
  left: "4.7%",
  top: "85.8%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const mechanicsRoom = {
  width: "15.3%",
  height: "51.5%",
  left: "2.0%",
  top: "21.2%",
  position: "absolute",
  cursor: "default",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

class Hallway2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmitMechanics = (code) => {
    if (code === "0") {
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

        {this.props.mechanicsUnlocked ? (
          <Link style={mechanicsRoom} to="/er/mechanics" />
        ) : (
          this.lockedMechanics()
        )}
      </>
    )
  }
}
export default withRouter(Hallway2)
