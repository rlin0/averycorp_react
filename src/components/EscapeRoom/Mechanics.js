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
import DialogueBox from "../UI/DialogueBox"
import txt from "../../text/er.json"
import FeedbackBar from "../UI/FeedbackBar"

const hallway2 = {
  left: "61.67%",
  top: "93.75%",
  width: "12%",
  height: "6.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const picture = {
  left: "2.58%",
  top: "41.38%",
  width: "12.5%",
  height: "16.13%",
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

const motorcycle = {
  left: "1.83%",
  top: "76.38%",
  width: "26%",
  height: "21.25%",
  zIndex: "5",
  position: "absolute",
  display: "block",
  overflow: "hidden",
}

export default class Mechanics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vaseBroken: false,
      vaseModalOpen: false,
      vaseTxt: false,
      motorcycleTxt: false,
    }
  }

  lockedCloset = () => {
    return (
      <>
        <img
          src={`${S3Url}/er/closet_locked.png`}
          alt="locked closet"
          className={styles.closet}
        />
        <LockModal
          style={lockedCloset}
          handleSubmit={this.handleClosetSubmit}
        />
      </>
    )
  }

  unscrewBolt = (e) => {
    if (getBit(this.props.mcMechanic, 1)) return
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
    return (
      <Link to="/er/mechanics_closet">
        <img
          src={`${S3Url}/er/closet_unlocked.png`}
          alt="unlocked closet"
          className={styles.closet}
        />
      </Link>
    )
  }

  brokenVase = () => {
    return (
      <>
        {this.state.vaseTxt && (
          <FeedbackBar
            text={txt.brokenVase}
            closed={() => this.setState({ vaseTxt: false })}
          />
        )}
        <img
          src={S3Url + "/er/vase_broken.png"}
          alt="broken vase"
          className={styles.vase}
          onClick={this.handleClickBrokenVase}
        />
        <Dialog
          open={this.state.vaseModalOpen}
          onClose={this.handleVaseModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ width: "800px", height: "600px" }}>
            <Jigsaw />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  vase = () => {
    return (
      <>
        <img
          src={S3Url + "/er/vase_new.png"}
          alt="vase"
          className={styles.vase}
          onClick={this.breakVase}
        />
      </>
    )
  }

  breakVase = () => {
    if (this.props.equipped === "wrench") {
      this.setState({ vaseBroken: true, vaseTxt: true })
    }
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
    console.log("pic clikc")
  }

  render() {
    if (this.props.closetUnlocked === null) return null
    if (!this.props.mechanicsUnlocked) return <Forbidden />
    return (
      <>
        <img src={S3Url + "/er/Mechanics.png"} width="100%" />
        <Link style={hallway2} to="/er/hallway2" />

        <ZoomModal style={picture}>
          <img src={S3Url + "/er/jigsaw/Gear.png"} usemap="#image-map" />
          <map name="image-map">
            <area
              coords="211,234,296,206,266,357,390,327,252,464,176,390"
              shape="poly"
              onClick={this.handlePictureClick}
            />
          </map>
        </ZoomModal>
        {this.props.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        <div
          style={motorcycle}
          onClick={() => this.setState({ motorcycleTxt: true })}
        />
        {this.state.motorcycleTxt && (
          <FeedbackBar
            text={txt.motorcycle}
            closed={() => this.setState({ motorcycleTxt: false })}
          />
        )}
        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
