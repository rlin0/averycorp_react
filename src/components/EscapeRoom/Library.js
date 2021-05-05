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
import styles from "./styles.module.css"
import { withRouter, Link } from "react-router-dom"
import { S3Url } from "../../helpers.js"
import ZoomModal from "./ZoomModal"

const hallway1 = {
  width: "5.2%",
  height: "7.7%",
  left: "5.7%",
  top: "88.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Library extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb") this.setState({ openComputer: true })
  }

  render() {
    return (
      <>
        <img src={S3Url + "/er/Library.png"} width="100%" />
        <Link to="/er/hallway1" style={hallway1} />

        <ZoomModal className={styles.book1}>
          <img
            src="/media/book1Cover.png"
            alt="book cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal className={styles.note1}>
          <img
            src="/media/Note1Cover.png"
            alt="Note cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal className={styles.magazine1}>
          <img
            src="/media/Magazine1Cover.png"
            alt="Magazine cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal
          className={styles.computer}
          required="usb"
          equipped={this.props.equipped}
        >
          <DialogContentText>Unable to read usb</DialogContentText>
        </ZoomModal>
      </>
    )
  }
}
