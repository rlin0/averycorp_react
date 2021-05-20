import React, { Component } from "react"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { S3Url, getBit } from "../../helpers.js"
import FeedbackBarToggle from "../UI/FeedbackBarToggle"
import txt from "../../text/er.json"
import ZoomModal from "../UI/ZoomModal"

const hallway2 = {
  left: "40.83%",
  top: "91.25%",
  width: "18%",
  height: "8.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const statue = {
  left: "51.5%",
  top: "42.25%",
  width: "7.33%",
  height: "31.13%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const note = {
  left: "25%",
  top: "72%",
  width: "2.08%",
  height: "2.5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Maintenance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candleLit: false,
    }
  }

  candle = () => {
    return (
      <img
        src={`${S3Url}/er/candle.png`}
        alt="candle"
        className={styles.candle}
        onClick={this.lightCandle}
      />
    )
  }

  litCandle = () => {
    return (
      <img
        src={`${S3Url}/er/candle_lit.png`}
        alt="lit candle"
        className={styles.candle}
      />
    )
  }

  lightCandle = () => {
    if (this.props.equipped === "matches") this.setState({ candleLit: true })
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Maintenance.png`} width="100%" />
        <Link style={hallway2} to="/er/hallway2" />
        {!getBit(this.props.mcMerchant, 3) && this.props.scanningUnlocked ? (
          <div style={statue} onClick={() => this.props.putMCMerchant(3)} />
        ) : (
          <FeedbackBarToggle text={txt.statueYellow} style={statue} />
        )}

        {!getBit(this.props.mcSpy, 3) && this.props.equipped === "inkwell" ? (
          <Link
            to="/er/electrical"
            className={styles.electrical}
            style={{ cursor: `url(${S3Url}/er/inkwell_cursor.png), auto` }}
            onClick={this.props.putElectricalBoxUnlocked}
          />
        ) : (
          <FeedbackBarToggle
            text={txt.electricalBox}
            className={styles.electrical}
          />
        )}

        {this.state.candleLit ? this.litCandle() : this.candle()}
        <ZoomModal style={note}>
          <img
            src={`${S3Url}/er/meme_note.png`}
            alt="XD"
            style={{ width: "500px", height: "300px" }}
          />
        </ZoomModal>
      </>
    )
  }
}
