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
  Popover,
} from "@material-ui/core"
import axios from "axios"
import CloseIcon from "@material-ui/icons/Close"
import { styles } from "../UI/InputModal"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import LockModal from "../UI/LockModal"
import { withStyles } from "@material-ui/styles"

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

const useStyles = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
})

class Hallway2 extends Component {
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

        <div
          style={window}
          aria-owns={this.state.window ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={(e) =>
            this.setState({ window: true, anchorEl: e.currentTarget })
          }
          onMouseLeave={(e) => this.setState({ window: false, anchorEl: null })}
        />
        <Popover
          id="mouse-over-popover"
          className={this.props.classes.popover}
          classes={{
            paper: this.props.classes.paper,
          }}
          open={this.state.window}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <img src={S3Url + "/er/window_mechanic.png"} />
        </Popover>
        {this.props.mechanicsUnlocked ? (
          <Link style={mechanicsRoom} to="/er/mechanics" />
        ) : (
          this.lockedMechanics()
        )}
      </>
    )
  }
}
export default withStyles(useStyles)(Hallway2)
