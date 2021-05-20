import React, { Component } from "react"
import { Dialog, DialogContent } from "@material-ui/core"
import styles from "./styles.module.css"
import Jigsaw from "./Jigsaw"
import { S3Url, getBit, masterPW } from "../../helpers.js"
import { Link } from "react-router-dom"
import Forbidden from "../Forbidden"
import LockModal from "../UI/LockModal"
import ZoomModal from "../UI/ZoomModal"
import txt from "../../text/er.json"
import FeedbackBar from "../UI/FeedbackBar"
import FeedbackBarToggle from "../UI/FeedbackBarToggle"

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

const mc = {
  left: "46%",
  top: "73.75%",
  width: "2.33%",
  height: "3.25%",
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
      vaseTxt: false,
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
        <LockModal style={lockedCloset} handleSubmit={this.handleClosetSubmit}>
          <p>
            If you can solve my riddle, then you can take a look at my closet.
            Riddle: Given eight eights (8, 8, 8, 8, 8, 8, 8, 8), you can arrange
            them to create any numbers you want and use +. How can you get 1000?
            (no spaces, order numbers from greatest to least)
          </p>
        </LockModal>
      </>
    )
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
          className={styles.vaseBroken}
          onClick={this.handleClickBrokenVase}
        />
        <Dialog
          open={this.state.vaseModalOpen}
          onClose={this.handleVaseModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ width: "800px", height: "600px" }}>
            <h3>Double click and hold to drag</h3>
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
    if (code === masterPW || code === "888+88+8+8+8") {
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
        <Link style={hallway2} to="/er/hallway2" />
        {!getBit(this.props.mcMechanic, 3) && (
          <img
            src={`${S3Url}/er/mc_mechanic.png`}
            style={mc}
            alt="mechanic chip"
            onClick={() => this.props.putMCMechanic(3)}
          />
        )}
        {this.state.vaseBroken && (
          <ZoomModal style={picture}>
            <img src={S3Url + "/er/jigsaw/Gear.png"} usemap="#image-map" />
            <map name="image-map">
              <area
                coords="211,234,296,206,266,357,390,327,252,464,176,390"
                shape="poly"
                onClick={() => this.props.putMCMechanic(2)}
              />
            </map>
          </ZoomModal>
        )}
        {this.props.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        <FeedbackBarToggle text={txt.motorcycle} style={motorcycle} />

        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
