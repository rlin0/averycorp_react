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
import { S3Url } from "../../helpers.js"
import LockModal from "./LockModal"

export default class Merchant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoModalOpen: false,
    }
  }

  handleScanningModalSubmit = (code) => {
    if (code === "0") {
      this.props.putScanningUnlocked()
      return true
    } else return false
  }

  render() {
    return (
      <>
        <img src={`${S3Url}/er/Merchant.png`} width="100%" />
        <div className={styles.merchantPhoto} />
        <LockModal
          className={styles.scanningDevice}
          handleSubmit={this.handleScanningModalSubmit}
        />
      </>
    )
  }
}
