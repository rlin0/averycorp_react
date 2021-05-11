import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"
import { S3Url, getBit } from "../../helpers.js"
import ModalBox from "../UI/ModalBox"

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
  left: "88.37%",
  top: "71.91%",
  width: "9.62%",
  height: "25.77%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const topElectricalBox = {
  left: "6%",
  top: "36.13%",
  width: "6.92%",
  height: "8.88%",
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
        src={`${S3Url}/er/litcandle.png`}
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

  handleElectricalBoxClick = () => {
    if (getBit(this.props.mcSpy, 3)) return
    if (this.props.equipped !== "inkwell") return
    this.props.putMCSpy(3)
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Maintenance.png`} width="100%" />
        <Link style={hallway2} to="/er/hallway2" />
        <div style={statue} onClick={this.handleStatueClick} />

        <div style={topElectricalBox} onClick={this.handleElectricalBoxClick} />

        {this.state.candleLit ? this.litCandle() : this.candle()}
      </>
    )
  }
}
