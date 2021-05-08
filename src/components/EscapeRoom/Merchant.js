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

export default class Merchant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoModalOpen: false,
      mcOpen: false,
    }
  }

  handleScanningModalSubmit = (code) => {
    if (code === "0") {
      this.props.putScanningUnlocked()
      return true
    } else return false
  }

  handleMCClick = () => {
    if (getBit(this.props.mcMerchant, 1)) return
    this.setState({ mcOpen: true })
    this.props.putMCMerchant(1)
  }
  render() {
    return (
      <>
        <img src={`${S3Url}/er/Merchant.png`} width="100%" />

        <div style={mc} onClick={this.handleMCClick} />
        {this.state.mcOpen && <BlueMC />}

        <div className={styles.merchantPhoto} />
        <LockModal
          className={styles.scanningDevice}
          handleSubmit={this.handleScanningModalSubmit}
        />
      </>
    )
  }
}
