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
import { S3Url, getBit } from "../../helpers.js"
import { withRouter, Link } from "react-router-dom"
import Forbidden from "../Forbidden"
import LockModal from "./LockModal"
import ZoomModal from "./ZoomModal"
import { RedMC } from "./MC"

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

const picture = {
  width: "10%",
  height: "7.1%",
  left: "50.3%",
  top: "15.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const lockedCloset = {
  left: "66.33%",
  top: "11.51%",
  width: "31.13%",
  height: "60.96%",
  zIndex: "5",
  position: "absolute",
  display: "block",
  overflow: "hidden",
}

const bolt1 = {
  position: "absolute",
  left: "73.54%",
  top: "45.89%",
  width: "1.76%",
  height: "2.74%",
  zIndex: "2",
  display: "block",
  overflow: "hidden",
}

const bolt2 = {
  position: "absolute",
  left: "77.84%",
  top: "45.89%",
  width: "1.76%",
  height: "2.74%",
  zIndex: "5",
  display: "block",
  overflow: "hidden",
}

const bolt3 = {
  position: "absolute",
  left: "73.77%",
  top: "63.84%",
  width: "1.76%",
  height: "2.74%",
  zIndex: "2",
  display: "block",
  overflow: "hidden",
}

const bolt4 = {
  position: "absolute",
  left: "77.76%",
  top: "64.25%",
  width: "1.76%",
  height: "2.74%",
  zIndex: "2",
  display: "block",
  overflow: "hidden",
}

export default class Mechanics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vaseBroken: false,
      vaseModalOpen: false,
      bolt1: false,
      bolt2: false,
      bolt3: false,
      bolt4: false,
    }
  }

  lockedCloset = () => {
    return (
      <>
        <img
          src={`${S3Url}/er/locked_closet.png`}
          alt="locked closet"
          className={styles.lockedCloset}
        />
        <LockModal
          style={lockedCloset}
          handleSubmit={this.handleClosetSubmit}
        />
      </>
    )
  }

  unscrewBolt = (e) => {
    if (this.props.equipped !== "wrench") return
    this.setState({ [e.target.id]: true }, () => {
      if (
        this.state.bolt1 &&
        this.state.bolt2 &&
        this.state.bolt3 &&
        this.state.bolt4
      ) {
        this.props.putMCMechanic(1)
      }
    })
  }

  unlockedCloset = () => {
    if (getBit(this.props.mcMechanic, 1)) return
    return (
      <>
        <div style={bolt1} id="bolt1" onClick={this.unscrewBolt} />
        <div style={bolt2} id="bolt2" onClick={this.unscrewBolt} />
        <div style={bolt3} id="bolt3" onClick={this.unscrewBolt} />
        <div style={bolt4} id="bolt4" onClick={this.unscrewBolt} />
      </>
    )
  }

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

  handlePictureClick = () => {
    // # TODO give memory chip
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

        <ZoomModal style={picture}>
          <div
            style={{ position: "relative", width: "800px", height: "500px" }}
          >
            <img
              src={S3Url + "/map.png"}
              alt="picture"
              style={{ position: "absolute" }}
            />
            <Button style={picture} onclick={this.handlePictureClick}>
              d
            </Button>
          </div>
        </ZoomModal>
        {this.props.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
