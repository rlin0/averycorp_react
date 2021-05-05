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
} from "@material-ui/core"
import axios from "axios"
import styles from "./styles.module.css"
import Jigsaw from "./Jigsaw"
import { S3Url } from "../../helpers.js"
import { withRouter, Link } from "react-router-dom"
import Forbidden from "../Forbidden"
import LockModal from "./LockModal"

const hallway2 = {
  width: "5.3%",
  height: "7.1%",
  left: "90.3%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Mechanics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vaseBroken: false,
      vaseModalOpen: false,
    }
  }

  lockedCloset = () => {
    return (
      <>
        <img src="#" alt="lock" className={styles.lock} />
        <LockModal
          className={styles.lock}
          handleSubmit={this.handleClosetSubmit}
        />
      </>
    )
  }

  unlockedCloset = () => {}

  brokenVase = () => {
    return (
      <>
        <img
          src="/media/vase_broken.png"
          alt="broken vase"
          className={styles.vase}
          onClick={this.handleClickBrokenVase}
        />
        <Dialog
          open={this.state.vaseModalOpen}
          onClose={this.handleVaseModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ width: "500px", height: "600px" }}>
            <Jigsaw />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  vase = () => {
    return (
      <img
        src="/media/vase.png"
        alt="vase"
        className={styles.vase}
        onClick={this.breakVase}
      />
    )
  }

  breakVase = () => {
    if (this.props.equipped === "wrench") this.setState({ vaseBroken: true })
  }

  handleClickBrokenVase = () => {
    this.setState({ vaseModalOpen: true })
  }

  handleVaseModalClose = () => {
    this.setState({ vaseModalOpen: false })
  }

  handleClosetSubmit = (code) => {
    if (code === "0") {
      this.props.putClosetUnlocked()
      return true
    } else {
      return false
    }
  }

  render() {
    if (this.props.closetUnlocked === null) return null
    if (!this.props.mechanicsUnlocked) return <Forbidden />
    return (
      <>
        <img src={S3Url + "/er/Mechanics.png"} width="100%" />
        <Link style={hallway2} to="/er/hallway2">
          hallway 2
        </Link>
        {this.props.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
