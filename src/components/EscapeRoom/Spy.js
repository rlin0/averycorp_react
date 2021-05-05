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
import { S3Url } from "../../helpers.js"
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"
import LockModal from "./LockModal"

const hallway1 = {
  width: "10%",
  height: "7.6%",
  left: "10%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Spy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hangerModalOpen: false,
      submitMsg: null,
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
      return true
    } else {
      return false
    }
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
          onclick={this.props.putSpyroomUnlocked}
        >
          Hallway1
        </Link>
        <div
          className={styles.hanger}
          onClick={() => this.setState({ hangerModalOpen: true })}
        />

        <LockModal
          className={styles.computerSpy}
          required="usb"
          equipped={this.props.equipped}
          handleSubmit={this.handleComputerSubmit}
        />

        <Dialog
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
        </Dialog>

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
          />
        )}
      </>
    )
  }
}
