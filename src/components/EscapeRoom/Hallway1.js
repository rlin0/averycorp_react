import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import { withStyles } from "@material-ui/styles"
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
  Popover,
  IconButton,
} from "@material-ui/core"
import LockModal from "./LockModal"

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

const window = {
  left: "52.08%",
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

class Hallway1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: false,
      anchorEl: null,
    }
  }

  handleSubmitMerchant = (code) => {
    if (code === "0" || code === "0624") {
      this.props.putMerchantUnlocked()
      return true
    } else return false
  }

  lockedMerchant = () => {
    return (
      <LockModal
        style={merchantRoom}
        handleSubmit={this.handleSubmitMerchant}
      />
    )
  }

  render() {
    if (this.props.spyroomUnlocked === null) return null

    return (
      <>
        <img src={S3Url + "/er/Hallway1.png"} width="100%" />
        <Link style={mainRoom} to="/er" />
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
          <img src={S3Url + "/er/window_merchant.png"} />
        </Popover>

        <Link style={library} to="/er/library" />

        {this.props.spyroomUnlocked && <Link style={spyRoom} to="/er/spy" />}
        {this.props.merchantUnlocked ? (
          <Link style={merchantRoom} to="/er/merchant" />
        ) : (
          this.lockedMerchant()
        )}
      </>
    )
  }
}
export default withStyles(useStyles)(Hallway1)
