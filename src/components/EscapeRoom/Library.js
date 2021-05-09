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
import { S3Url, setBit, getBit } from "../../helpers"
import ZoomModal from "./ZoomModal"
import ModalBox from "../UI/ModalBox"

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

const book1 = {
  width: "1.3%",
  height: "6.3%",
  left: "14.2%",
  top: "13.4%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const book2 = {
  position: "absolute",
  left: "40.27%",
  top: "28.86%",
  width: "6.15%",
  height: "6.3%",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
  color: "blue",
}

const note1 = {
  width: "4.2%",
  height: "8.5%",
  left: "25.4%",
  top: "87.5%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const magazine1 = {
  width: "4%",
  height: "9.3%",
  left: "45.5%",
  top: "75.8%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb") this.setState({ openComputer: true })
  }

  handleBookClick = () => {
    if (getBit(this.props.mcMerchant, 2)) return
    this.props.putMCMerchant(2)
  }

  render() {
    return (
      <>
        <img src={S3Url + "/er/Library.png"} width="100%" />
        <Link to="/er/hallway1" style={hallway1} />

        <ZoomModal style={book1}>
          <img
            src="/media/book1Cover.png"
            alt="book cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <div style={book2} onClick={this.handleBookClick} />

        <ZoomModal style={note1}>
          <img
            src="/media/Note1Cover.png"
            alt="Note cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal style={magazine1}>
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
