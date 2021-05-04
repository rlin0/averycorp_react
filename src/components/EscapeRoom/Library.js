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
    this.state = {
      openBook1: false,
      openNote1: false,
      openMagazine1: false,
      openComputer: false,
    }
  }

  handleComputerClick = () => {
    if (this.props.equipped === "usb") this.setState({ openComputer: true })
  }

  render() {
    return (
      <>
        <img src={S3Url + "/er/Library.png"} width="100%" />
        <Link to="/er/hallway1" style={hallway1} />
        <div
          className={styles.book1}
          onClick={() => this.setState({ openBook1: true })}
        />
        <Dialog
          open={this.state.openBook1}
          onClose={() => this.setState({ openBook1: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <img
              src="/media/book1Cover.png"
              alt="book cover"
              style={{ width: "500px", height: "600px" }}
            />
          </DialogContent>
        </Dialog>

        <div
          className={styles.note1}
          onClick={() => this.setState({ openNote1: true })}
        />
        <Dialog
          open={this.state.openNote1}
          onClose={() => this.setState({ openNote1: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <img
              src="/media/Note1Cover.png"
              alt="Note cover"
              style={{ width: "500px", height: "600px" }}
            />
          </DialogContent>
        </Dialog>

        <div
          className={styles.magazine1}
          onClick={() => this.setState({ openMagazine1: true })}
        />
        <Dialog
          open={this.state.openMagazine1}
          onClose={() => this.setState({ openMagazine1: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <img
              src="/media/Magazine1Cover.png"
              alt="Magazine cover"
              style={{ width: "500px", height: "600px" }}
            />
          </DialogContent>
        </Dialog>

        <div className={styles.computer} onClick={this.handleComputerClick} />
        <Dialog
          open={this.state.openComputer}
          onClose={() => this.setState({ openComputer: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DialogContentText>Unable to read usb</DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}
