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
import axios from "axios"
import styles from "./styles.module.css"
import { S3Url, getBit } from "../../helpers.js"
import LockModal from "./LockModal"
import { BlueMC } from "./MC"
import FeedbackBar from "../UI/FeedbackBar"
import txt from "../../text/er.json"

const mc = {
  width: "5.3%",
  height: "7.1%",
  left: "90.3%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const map = {
  left: "8%",
  top: "45.13%",
  width: "15.83%",
  height: "11.13%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const cities = {
  left: "28.17%",
  top: "39.63%",
  width: "23.08%",
  height: "23.88%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Merchant extends Component {
  constructor(props) {
    super(props)
    this.state = { mapClick: false, citiesClick: false }
  }

  handleScanningModalSubmit = (code) => {
    if (code === "0") {
      this.props.putScanningUnlocked()
      return true
    } else return false
  }

  handleMCClick = () => {
    this.props.putMCMerchant(1)
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Merchant.png`} width="100%" />

        {!getBit(this.props.mcMerchant, 1) && (
          <img src="" style={mc} alt="chip" onClick={this.handleMCClick} />
        )}

        <div style={map} onClick={() => this.setState({ mapClick: true })} />
        {this.state.mapClick && (
          <FeedbackBar
            text={txt.map}
            closed={() => this.setState({ mapClick: false })}
          />
        )}
        <div
          style={cities}
          onClick={() => this.setState({ citiesClick: true })}
        />

        {this.state.citiesClick && (
          <FeedbackBar
            text={txt.cities}
            closed={() => this.setState({ citiesClick: false })}
          />
        )}
        <LockModal
          className={styles.scanningDevice}
          handleSubmit={this.handleScanningModalSubmit}
        />
      </>
    )
  }
}
