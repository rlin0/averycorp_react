import React, { Component } from "react"
import {
  CssBaseline,
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

export default class Mechanics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closetUnlocked: false,
      vaseBroken: false,
      lockModalOpen: false,
      vaseModalOpen: false,
      answer: null,
      submitMsg: null,
    }
  }

  componentDidMount() {
    this.getClosetUnlocked()
  }

  getClosetUnlocked = () => {
    axios
      .get("/api/er/me_get_unlocked", {
        params: {
          teamId: this.props.teamId,
        },
      })
      .then((res) => {
        this.setState({
          closetUnlocked: res.data.unlocked,
        })
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
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

              {this.state.submitMsg !== null && (
                <DialogContentText>{this.state.submitMsg}</DialogContentText>
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

  handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .post("/api/er/me_unlock_closet", {
        teamId: this.props.teamId,
        answer: this.state.answer,
      })
      .then((res) => {
        if (res.data.success) {
          if (res.data.msg === "correct") {
            this.setState({
              closetUnlocked: true,
              lockModalOpen: false,
              submitMsg: null,
            })
          } else {
            this.setState({ submitMsg: res.data.msg })
          }
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  render() {
    return (
      <>
        <img src="/media/MechanicsRoom.png" width="100%" />
        {this.state.closetUnlocked
          ? this.unlockedCloset()
          : this.lockedCloset()}

        {this.state.vaseBroken ? this.brokenVase() : this.vase()}
      </>
    )
  }
}
