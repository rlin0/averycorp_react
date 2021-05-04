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
import axios from "axios"
import styles from "./styles.module.css"
import Jigsaw from "./Jigsaw"
import { S3Url } from "../../helpers.js"
import { withRouter, Link } from "react-router-dom"

const hallway2 = {
  width: "5.3%",
  height: "7.1%",
  left: "90.3%",
  top: "87.2%",
  position: "absolute",
  display: "block",
  zIndex: "5",
  overflow: "hidden",
}

export default class Mechanics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vaseBroken: false,
      lockModalOpen: false,
      vaseModalOpen: false,
      answer: null,
      incorrect: false,
    }
  }

  lockedCloset = () => {
    return (
      <>
        <img
          src="#"
          alt="lock"
          className={styles.lock}
          onClick={this.handleLockModalOpen}
        />
        <Dialog
          open={this.state.lockModalOpen}
          onClose={this.handleLockModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Riddle</DialogTitle>
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Given eight eights (8, 8, 8, 8, 8, 8, 8, 8), you can arrange
                them to create any numbers you want and use +, -, *, or /. How
                can you get 1000?
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                onChange={({ target }) =>
                  this.setState({ answer: target.value })
                }
              />

              {this.state.incorrect && (
                <DialogContentText>incorrect</DialogContentText>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleLockModalClose}>Close</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    )
  }

  unlockedCloset = () => {}

  brokenVase = () => {
    return (
      <>
        <img
          src="/media/vase_broken.png"
          alt="broken vase"
          className={styles.vase}
          onClick={this.handleClickBrokenVase}
        />
        <Dialog
          open={this.state.vaseModalOpen}
          onClose={this.handleVaseModalClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ width: "500px", height: "600px" }}>
            <Jigsaw />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  vase = () => {
    return (
      <img
        src="/media/vase.png"
        alt="vase"
        className={styles.vase}
        onClick={this.breakVase}
      />
    )
  }

  breakVase = () => {
    if (this.props.equipped === "wrench") this.setState({ vaseBroken: true })
  }

  handleLockModalOpen = () => {
    this.setState({ lockModalOpen: true })
  }

  handleClickBrokenVase = () => {
    this.setState({ vaseModalOpen: true })
  }

  handleLockModalClose = () => {
    this.setState({ lockModalOpen: false })
  }

  handleVaseModalClose = () => {
    this.setState({ vaseModalOpen: false })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.answer === "0") this.props.putClosetUnlocked()
    else this.setState({ incorrect: true })
  }

  render() {
    if (this.props.closetUnlocked === null) return null

    return (
      <>
        <img src={S3Url + "/er/Mechanics.png"} width="100%" />
        <Link style={hallway2} to="/er/hallway2">
          hallway 2
        </Link>
        {this.state.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
