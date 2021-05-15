import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"
import { S3Url, getBit } from "../../helpers.js"
import ModalBox from "../UI/ModalBox"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"
import { TocTwoTone } from "@material-ui/icons"

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

export default class Maintenance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candleLit: false,
      noInkwellTxt: false,
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

  handleStatueClick = () => {
    if (getBit(this.props.mcMerchant, 3)) return
    if (!this.props.scanningUnlocked) return
    this.props.putMCMerchant(3)
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Maintenance.png`} width="100%" />
        <Link style={hallway2} to="/er/hallway2" />
        <div style={statue} onClick={this.handleStatueClick} />

        {!getBit(this.props.mcSpy, 3) && this.props.equipped !== "inkwell" && (
          <div
            className={styles.electrical}
            onClick={() => this.setState({ noInkwellTxt: true })}
          />
        )}

        {!getBit(this.props.mcSpy, 3) && this.props.equipped === "inkwell" && (
          <Link
            to="/er/electrical"
            className={styles.electrical}
            style={{ cursor: `url(${S3Url}/er/inkwell_cursor.png), auto` }}
            onClick={this.props.putElectricalBoxUnlocked}
          />
        )}

        {this.state.noInkwellTxt && (
          <FeedbackBar
            text={txt.electricalBox}
            closed={() => this.setState({ noInkwellTxt: false })}
          />
        )}
        {this.state.candleLit ? this.litCandle() : this.candle()}
      </>
    )
  }
}
