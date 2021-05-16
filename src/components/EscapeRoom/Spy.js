import React, { Component } from "react"
import {
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Forbidden from "../Forbidden"
import { getBit, S3Url } from "../../helpers.js"
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"
import LockModal from "./LockModal"
import MC from "./MC"
import txt from "../../text/er.json"
import FeedbackBar from "../UI/FeedbackBar"
import ZoomModal from "./ZoomModal"

const hallway1 = {
  left: "57.5%",
  top: "91.13%",
  width: "19.25%",
  height: "8.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const usb = {
  left: "26%",
  top: "61%",
  width: "5.42%",
  height: "10.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const toolcase = {
  left: "82.83%",
  top: "44.13%",
  width: "6.92%",
  height: "9.63%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const inkwell = {
  left: "85.92%",
  top: "48.25%",
  width: "2.5%",
  height: "4%",
  position: "absolute",
  display: "block",
  zIndex: "7",
  overflow: "hidden",
}

export default class Spy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hangerModalOpen: false,
      submitMsg: null,
      clickComputer: false,
      computerUnlocked: false,
    }
  }

  handleHangerModalClose = () => {
    this.setState({ hangerModalOpen: false })
  }

  handleHangerClick = () => {
    if (this.props.equipped === "usb")
      this.setState({ computerModalOpen: true })
  }

  handleHologramSubmit = (code) => {
    if (code) {
      this.props.putHologramUnlocked()
      return true
    } else {
      return false
    }
  }

  handleComputerSubmit = (code) => {
    if (code) {
      this.setState({ computerUnlocked: true })
      return true
    } else {
      return false
    }
  }

  handleHologramEnd = () => {
    if (getBit(this.props.mcSpy, 2)) return
    this.setState({ mcOpen: true })
    this.props.putMCSpy(2)
  }

  render() {
    if (this.props.spyroomUnlocked === null) return null
    if (!this.props.spyroomUnlocked) return <Forbidden />
    return (
      <>
        <img src={`${S3Url}/er/Spy.png`} width="100%" />
        <Link
          style={hallway1}
          to="/er/hallway1"
          onClick={this.props.putSpyroomUnlocked}
        />
        <div
          className={styles.hanger}
          onClick={() => this.setState({ hangerModalOpen: true })}
        />

        {this.state.computerUnlocked ? (
          <ZoomModal className={styles.computerSpy}>
            <img
              src={`${S3Url}/er/monitor_closeup.png`}
              alt="spy room monitor"
              style={{ width: "800px", height: "500px" }}
            />
          </ZoomModal>
        ) : (
          <div
            className={styles.computerSpy}
            onClick={() => this.setState({ clickComputer: true })}
          />
        )}

        {this.state.clickComputer && (
          <FeedbackBar
            text={txt.computerSpy}
            closed={() => this.setState({ clickComputer: false })}
          />
        )}
        <LockModal
          style={usb}
          required="usb"
          equipped={this.props.equipped}
          handleSubmit={this.handleComputerSubmit}
        />

        {this.state.hangerModalOpen && (
          <>
            <img src={`${S3Url}/er/spy_toolcase.png`} style={toolcase} />

            {!this.props.inkwell && (
              <img
                src={`${S3Url}/er/inkwell.png`}
                style={inkwell}
                alt="inkwell"
                onClick={() => {
                  return this.props.pickUp("inkwell")
                }}
              />
            )}
          </>
        )}
        {/* <Dialog
          open={this.state.hangerModalOpen}
          onClose={this.handleHangerModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Tool Case
            <IconButton
              aria-label="close"
              onClick={this.handleHangerModalClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img src={`${S3Url}/er/SpyTool.png`} />
            {!this.props.inkwell && (
              <img
                src={`${S3Url}/er/inkwell.png`}
                className={styles.inkwell}
                alt="inkwell"
                onClick={() => {
                  return this.props.pickUp("inkwell")
                }}
              />
            )}
          </DialogContent>
        </Dialog> */}

        <LockModal
          className={styles.hologramBottom}
          handleSubmit={this.handleHologramSubmit}
        />
        {this.props.hologramUnlocked && (
          <video
            width="100px"
            height="300px"
            className={styles.hologram}
            autoPlay
            type="video/mp4"
            src="/lemon.mp4"
            onClick={(e) => {
              e.target.play()
            }}
            onEnded={this.handleHologramEnd}
          />
        )}
      </>
    )
  }
}
