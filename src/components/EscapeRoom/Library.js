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
  left: "42.33%",
  top: "91.13%",
  width: "15%",
  height: "8.75%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const book1 = {
  left: "12.75%",
  top: "45.5%",
  width: "1.67%",
  height: "4.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const book2 = {
  position: "absolute",
  left: "14.25%",
  top: "54.63%",
  width: "1.67%",
  height: "4.25%",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
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
  left: "31.17%",
  top: "81.13%",
  width: "5.42%",
  height: "7.25%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

const computer = {
  left: "83.75%",
  top: "60.12%",
  width: "8.08%",
  height: "10.63%",
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
            src={S3Url + "/er/magazine.png"}
            alt="Magazine cover"
            style={{ width: "500px", height: "600px" }}
          />
        </ZoomModal>

        <ZoomModal
          style={computer}
          required="usb"
          equipped={this.props.equipped}
        >
          <DialogContentText>Unable to read usb</DialogContentText>
        </ZoomModal>
      </>
    )
  }
}
