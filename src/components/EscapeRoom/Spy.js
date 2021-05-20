import React, { Component } from "react"
import Forbidden from "../Forbidden"
import { getBit, S3Url, masterPW } from "../../helpers.js"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import LockModal from "../UI/LockModal"
import txt from "../../text/er.json"
import FeedbackBarToggle from "../UI/FeedbackBarToggle"
import ZoomModal from "../UI/ZoomModal"
import DialogueBox from "../UI/DialogueBox"

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

const hologram = {
  position: "absolute",
  left: "62.33%",
  top: "43.13%",
  width: "12.33%",
  height: "32.63%",
  zIndex: "5",
}

const computer = {
  left: "26.17%",
  top: "60.88%",
  width: "5%",
  height: "10.38%",
  position: "absolute",
  display: "block",
  zIndex: "7",
  overflow: "hidden",
}

const painting1 = {
  left: "4.08%",
  top: "42.25%",
  width: "8.25%",
  height: "14%",
  position: "absolute",
  display: "block",
  zIndex: "7",
  overflow: "hidden",
}

const painting2 = {
  left: "28.58%",
  top: "39.25%",
  width: "6.33%",
  height: "11.25%",
  position: "absolute",
  display: "block",
  zIndex: "7",
  overflow: "hidden",
}

const painting3 = {
  left: "37.67%",
  top: "44.25%",
  width: "4.67%",
  height: "10.25%",
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
    if (code === masterPW || code === "0153") {
      this.props.putHologramUnlocked()
      return true
    } else {
      return false
    }
  }

  handleHologramEnd = () => {
    this.props.putMCSpy(2)
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb" && !getBit(this.props.mcSpy, 1)) {
      this.props.putMCSpy(1)
    }
  }

  render() {
    if (this.props.spyroomUnlocked === null) return null
    if (!this.props.spyroomUnlocked) {
      return <Forbidden />
    }
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
        <div style={computer} onClick={this.handleComputerClick} />

        {getBit(this.props.mcSpy, 1) ? (
          <ZoomModal className={styles.computerSpy}>
            <img
              src={`${S3Url}/er/monitor_closeup.png`}
              alt="spy room monitor"
              style={{ width: "800px", height: "500px" }}
            />
          </ZoomModal>
        ) : (
          <FeedbackBarToggle
            text={txt.computerSpy}
            className={styles.computerSpy}
          />
        )}

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
        <FeedbackBarToggle text={txt.painting} style={painting1} />
        <FeedbackBarToggle text={txt.painting} style={painting2} />
        <FeedbackBarToggle text={txt.painting} style={painting3} />
        <LockModal
          className={styles.hologramBottom}
          handleSubmit={this.handleHologramSubmit}
        />

        {this.props.hologramUnlocked && !getBit(this.props.mcSpy, 2) && (
          <>
            <img src={`${S3Url}/er/spy_hologram.png`} style={hologram} />

            <DialogueBox
              data={txt.hologram}
              style={hologram}
              repeat={false}
              clickToggle
              onEnd={this.handleHologramEnd}
            />
          </>
        )}
      </>
    )
  }
}
